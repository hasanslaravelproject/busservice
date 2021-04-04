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
import {addOauth_Refresh_Tokens, getOauth_Refresh_Tokens,getOneOauth_Refresh_Tokens, updateOauth_Refresh_Tokens} from "../../repo/oauth_refresh_tokensRepo";





function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Oauth_Refresh_TokensAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [oauth_refresh_tokens,setOauth_Refresh_Tokens] = useState(undefined);
    const [loading, setLoading] = useState(false);
    

    const checkErrors = () => {
        let errorList = {}
        if(oauth_refresh_tokens.access_token_id === "" || oauth_refresh_tokens.access_token_id === undefined)
{
   errorList = { ...errorList,access_token_id: "Required field!"}
}
if(oauth_refresh_tokens.revoked === "" || oauth_refresh_tokens.revoked === undefined)
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
            getOneOauth_Refresh_Tokens(props.match.params.id).then((res) => {
                setOauth_Refresh_Tokens(res.data.data);
                setLoading(false);
            })
        }else{
            setOauth_Refresh_Tokens({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (oauth_refresh_tokens.id) {
            setLoading(true);
               var updateResponse =  await updateOauth_Refresh_Tokens(oauth_refresh_tokens.id,oauth_refresh_tokens);
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
                var addResponse = await addOauth_Refresh_Tokens(oauth_refresh_tokens);
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
        <PageTemplate title="Add/Update Oauth_Refresh_Tokens">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(oauth_refresh_tokens!==undefined )?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.access_token_id}
type ={"text"}
onChange={(e)=>{setOauth_Refresh_Tokens({...oauth_refresh_tokens,access_token_id:e.target.value});checkErrors()}}
defaultValue ={oauth_refresh_tokens.access_token_id}
error ={(errorMessages.access_token_id)?true:false}
label ={"access_token_id"}/>
</ Grid >
<Grid xs={12} md={6} key={"1"} item>
<TextField required autoFocus fullWidth
helperText ={errorMessages.revoked}
type ={"number"}
onChange={(e)=>{setOauth_Refresh_Tokens({...oauth_refresh_tokens,revoked:e.target.value});checkErrors()}}
defaultValue ={oauth_refresh_tokens.revoked}
error ={(errorMessages.revoked)?true:false}
label ={"revoked"}/>
</ Grid >
<Grid xs={12} md={6} key={"2"} item>
<TextField  autoFocus fullWidth
helperText ={errorMessages.expires_at}
type ={"date"}
InputLabelProps ={{ shrink: true, }}
onChange={(e)=>{setOauth_Refresh_Tokens({...oauth_refresh_tokens,expires_at:e.target.value});checkErrors()}}
defaultValue ={oauth_refresh_tokens.expires_at}
error ={(errorMessages.expires_at)?true:false}
label ={"expires_at"}/>
</ Grid >
<Grid xs={12}  md={6} item key={"3"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/oauth_refresh_tokens')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"4"}>
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

export default withRouter(Oauth_Refresh_TokensAddUpdatePage)
