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
import {addOauth_Clients, getOauth_Clients,getOneOauth_Clients, updateOauth_Clients} from "../../repo/oauth_clientsRepo";





function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Oauth_ClientsAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [oauth_clients,setOauth_Clients] = useState(undefined);
    const [loading, setLoading] = useState(false);
    

    const checkErrors = () => {
        let errorList = {}
        if(oauth_clients.name === "" || oauth_clients.name === undefined)
{
   errorList = { ...errorList,name: "Required field!"}
}
if(oauth_clients.redirect === "" || oauth_clients.redirect === undefined)
{
   errorList = { ...errorList,redirect: "Required field!"}
}
if(oauth_clients.personal_access_client === "" || oauth_clients.personal_access_client === undefined)
{
   errorList = { ...errorList,personal_access_client: "Required field!"}
}
if(oauth_clients.password_client === "" || oauth_clients.password_client === undefined)
{
   errorList = { ...errorList,password_client: "Required field!"}
}
if(oauth_clients.revoked === "" || oauth_clients.revoked === undefined)
{
   errorList = { ...errorList,revoked: "Required field!"}
}


        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    
      
        if(props.match.params.id) {
            setLoading(true);
            getOneOauth_Clients(props.match.params.id).then((res) => {
                setOauth_Clients(res.data.data);
                setLoading(false);
            })
        }else{
            setOauth_Clients({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (oauth_clients.id) {
            setLoading(true);
               var updateResponse =  await updateOauth_Clients(oauth_clients.id,oauth_clients);
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
                var addResponse = await addOauth_Clients(oauth_clients);
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
        <PageTemplate title="Add/Update Oauth_Clients">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(oauth_clients!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.user_id}
type ={"number"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,user_id:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.user_id}
error ={(errorMessages.user_id)?true:false}
label ={"user_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.name}
type ={"text"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,name:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.name}
error ={(errorMessages.name)?true:false}
label ={"name"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.secret}
type ={"text"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,secret:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.secret}
error ={(errorMessages.secret)?true:false}
label ={"secret"}/>
</ Grid >
<Grid xs={12} md={6} key={"3"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.provider}
type ={"text"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,provider:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.provider}
error ={(errorMessages.provider)?true:false}
label ={"provider"}/>
</ Grid >
<Grid xs={12} md={6} key={"4"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.redirect}
type ={"text"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,redirect:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.redirect}
error ={(errorMessages.redirect)?true:false}
label ={"redirect"}/>
</ Grid >
<Grid xs={12} md={6} key={"5"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.personal_access_client}
type ={"number"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,personal_access_client:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.personal_access_client}
error ={(errorMessages.personal_access_client)?true:false}
label ={"personal_access_client"}/>
</ Grid >
<Grid xs={12} md={6} key={"6"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.password_client}
type ={"number"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,password_client:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.password_client}
error ={(errorMessages.password_client)?true:false}
label ={"password_client"}/>
</ Grid >
<Grid xs={12} md={6} key={"7"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.revoked}
type ={"number"}
onChange={(e)=>{setOauth_Clients({...oauth_clients,revoked:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.revoked}
error ={(errorMessages.revoked)?true:false}
label ={"revoked"}/>
</ Grid >
<Grid xs={12} md={6} key={"8"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.created_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setOauth_Clients({...oauth_clients,created_at:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.created_at}
error ={(errorMessages.created_at)?true:false}
label ={"created_at"}/>
</ Grid >
<Grid xs={12} md={6} key={"9"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.updated_at}
type ={"datetime-local"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setOauth_Clients({...oauth_clients,updated_at:e.target.value});checkErrors()}}
defaultValue ={oauth_clients.updated_at}
error ={(errorMessages.updated_at)?true:false}
label ={"updated_at"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"10"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/oauth_clients')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"11"}>
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

export default withRouter(Oauth_ClientsAddUpdatePage)
