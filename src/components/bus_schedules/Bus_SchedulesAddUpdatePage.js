import {withRouter} from "react-router";
import TextField from "@material-ui/core/TextField";
import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Snackbar from '@material-ui/core/Snackbar';
import { Switch } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import PageTemplate from "../templates/Template";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import history from '../../history';
import { Loading } from "../templates/Loading";
import {addBus_Schedules, getBus_Schedules,getOneBus_Schedules, updateBus_Schedules} from "../../repo/bus_schedulesRepo";


import {getBuses} from "../../repo/busesRepo";
import {getBus_Routes} from "../../repo/bus_routesRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Bus_SchedulesAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [bus_schedules,setBus_Schedules] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [buses,setBuses] = useState(undefined)
const [bus_routes,setBus_Routes] = useState(undefined)


    const checkErrors = () => {
        let errorList = {}
        if(bus_schedules.date === "" || bus_schedules.date === undefined)
{
   errorList = { ...errorList,date: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    getBuses(0,200,"").then((res)=>{ setBuses(res.data); setLoading(false); })
getBus_Routes(0,200,"").then((res)=>{ setBus_Routes(res.data); setLoading(false); })

      
        if(props.match.params.id) {
            setLoading(true);
            getOneBus_Schedules(props.match.params.id).then((res) => {
                setBus_Schedules(res.data.data);
                setLoading(false);
            })
        }else{
            setBus_Schedules({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (bus_schedules.id) {
            setLoading(true);
               var updateResponse =  await updateBus_Schedules(bus_schedules.id,bus_schedules);
               setLoading(false);
               if(updateResponse && updateResponse.data){
                   if(updateResponse.data.code===1){
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Updated Successfully.",severity:"success"});
                     }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
                }
               }else{
                setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Updated failed. Please try again.", severity:"error"});
            }
                //props.history.push("/");
            } else {
            setLoading(true);
                var addResponse = await addBus_Schedules(bus_schedules);
                setLoading(false);
                if(addResponse && addResponse.data){
                    if(addResponse.data.code===1){
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Record Added Successfully.",severity:"success"});
                          }else{
                        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    }
                }else{
                    setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Add Record Failed. Please try again.",severity:"error"});
                    
                }
                //props.history.push("/");
            }
        }else{
            setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
                   
        } 
    }catch (e) {
        setAlertstate({ open: true, vertical: 'bottom', horizontal: 'center', message:"Invalid Data. Please try again.",severity:"error"});
            
    }

    }
   
    const hideAlert = () => {
        setAlertstate({ ...alertState, open: false });
      };
    return(
        <PageTemplate title="Add/Update Bus_Schedules">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(bus_schedules!==undefined  && buses!==undefined && bus_routes!==undefined)?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.date}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setBus_Schedules({...bus_schedules,date:e.target.value});checkErrors()}}
defaultValue ={bus_schedules.date}
error ={(errorMessages.date)?true:false}
label ={"date"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.created_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setBus_Schedules({...bus_schedules,created_at:e.target.value});checkErrors()}}
defaultValue ={bus_schedules.created_at}
error ={(errorMessages.created_at)?true:false}
label ={"created_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.updated_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setBus_Schedules({...bus_schedules,updated_at:e.target.value});checkErrors()}}
defaultValue ={bus_schedules.updated_at}
error ={(errorMessages.updated_at)?true:false}
label ={"updated_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item >
<InputLabel style={{textAlign: 'left'}}>bus_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="bus_id"
                              id="bus_id"
                              value={bus_schedules.bus_id}
                              onChange ={(e)=>{setBus_Schedules({...bus_schedules,bus_id:e.target.value});checkErrors()}}>
                              {buses.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12} md={6} key={"6"} item >
<InputLabel style={{textAlign: 'left'}}>bus_route_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="bus_route_id"
                              id="bus_route_id"
                              value={bus_schedules.bus_route_id}
                              onChange ={(e)=>{setBus_Schedules({...bus_schedules,bus_route_id:e.target.value});checkErrors()}}>
                              {bus_routes.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12}  md={6} item key={"7"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/bus_schedules')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"8"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button variant={"contained"} color="primary"  type={"Sumbit"}>Save</Button>
</Grid>
</Grid>

                        </Grid>
                        :null}
                </form>
                
               
                </CardContent>
                </Card>
                <Snackbar autoHideDuration={6000}
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={hideAlert}
                    key={vertical + horizontal}>
                       <Alert onClose={hideAlert}  severity={severity}>
                       {message}
                    </Alert>
                </Snackbar>
        </PageTemplate>
    )
}

export default withRouter(Bus_SchedulesAddUpdatePage)
