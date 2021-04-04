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
import {addBuses, getBuses,getOneBuses, updateBuses} from "../../repo/busesRepo";


import {getCompanies} from "../../repo/companiesRepo";
import {getBus_Categories} from "../../repo/bus_categoriesRepo";
import {getSeat_Classes} from "../../repo/seat_classesRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const BusesAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [buses,setBuses] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [companies,setCompanies] = useState(undefined)
const [bus_categories,setBus_Categories] = useState(undefined)
const [seat_classes,setSeat_Classes] = useState(undefined)


    const checkErrors = () => {
        let errorList = {}
        if(buses.name === "" || buses.name === undefined)
{
   errorList = { ...errorList,name: "Required field!"}
}
if(buses.bus_number === "" || buses.bus_number === undefined)
{
   errorList = { ...errorList,bus_number: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    getCompanies(0,200,"").then((res)=>{ setCompanies(res.data); setLoading(false); })
getBus_Categories(0,200,"").then((res)=>{ setBus_Categories(res.data); setLoading(false); })
getSeat_Classes(0,200,"").then((res)=>{ setSeat_Classes(res.data); setLoading(false); })

      
        if(props.match.params.id) {
            setLoading(true);
            getOneBuses(props.match.params.id).then((res) => {
                setBuses(res.data.data);
                setLoading(false);
            })
        }else{
            setBuses({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (buses.id) {
            setLoading(true);
               var updateResponse =  await updateBuses(buses.id,buses);
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
                var addResponse = await addBuses(buses);
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
        <PageTemplate title="Add/Update Buses">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(buses!==undefined  && companies!==undefined && bus_categories!==undefined && seat_classes!==undefined)?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.name}
type ={"text"}
onChange={(e)=>{setBuses({...buses,name:e.target.value});checkErrors()}}
defaultValue ={buses.name}
error ={(errorMessages.name)?true:false}
label ={"name"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.image}
type ={"text"}
onChange={(e)=>{setBuses({...buses,image:e.target.value});checkErrors()}}
defaultValue ={buses.image}
error ={(errorMessages.image)?true:false}
label ={"image"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.bus_number}
type ={"text"}
onChange={(e)=>{setBuses({...buses,bus_number:e.target.value});checkErrors()}}
defaultValue ={buses.bus_number}
error ={(errorMessages.bus_number)?true:false}
label ={"bus_number"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.created_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setBuses({...buses,created_at:e.target.value});checkErrors()}}
defaultValue ={buses.created_at}
error ={(errorMessages.created_at)?true:false}
label ={"created_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.updated_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setBuses({...buses,updated_at:e.target.value});checkErrors()}}
defaultValue ={buses.updated_at}
error ={(errorMessages.updated_at)?true:false}
label ={"updated_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item >
<InputLabel style={{textAlign: 'left'}}>company_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="company_id"
                              id="company_id"
                              value={buses.company_id}
                              onChange ={(e)=>{setBuses({...buses,company_id:e.target.value});checkErrors()}}>
                              {companies.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12} md={6} key={"9"} item >
<InputLabel style={{textAlign: 'left'}}>bus_category_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="bus_category_id"
                              id="bus_category_id"
                              value={buses.bus_category_id}
                              onChange ={(e)=>{setBuses({...buses,bus_category_id:e.target.value});checkErrors()}}>
                              {bus_categories.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12} md={6} key={"10"} item >
<InputLabel style={{textAlign: 'left'}}>seat_class_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="seat_class_id"
                              id="seat_class_id"
                              value={buses.seat_class_id}
                              onChange ={(e)=>{setBuses({...buses,seat_class_id:e.target.value});checkErrors()}}>
                              {seat_classes.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12}  md={6} item key={"11"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/buses')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"12"}>
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

export default withRouter(BusesAddUpdatePage)
