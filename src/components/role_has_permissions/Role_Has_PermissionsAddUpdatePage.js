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
import {addRole_Has_Permissions, getRole_Has_Permissions,getOneRole_Has_Permissions, updateRole_Has_Permissions} from "../../repo/role_has_permissionsRepo";


import {getPermissions} from "../../repo/permissionsRepo";
import {getRoles} from "../../repo/rolesRepo";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Role_Has_PermissionsAddUpdatePage = (props)=>{
    const [alertState, setAlertstate] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        severity: "success",
        message:"",
      });
    const { vertical, horizontal, open, severity, message } = alertState;
    const [errorMessages, setErrorMessages] = useState({});
    const [role_has_permissions,setRole_Has_Permissions] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [permissions,setPermissions] = useState(undefined)
const [roles,setRoles] = useState(undefined)


    const checkErrors = () => {
        let errorList = {}
        

        setErrorMessages(errorList)
        return errorList
    }

    useEffect(()=>{
     setLoading(true);
    getPermissions(0,200,"").then((res)=>{ setPermissions(res.data); setLoading(false); })
getRoles(0,200,"").then((res)=>{ setRoles(res.data); setLoading(false); })

      
        if(props.match.params.id) {
            setLoading(true);
            getOneRole_Has_Permissions(props.match.params.id).then((res) => {
                setRole_Has_Permissions(res.data.data);
                setLoading(false);
            })
        }else{
            setRole_Has_Permissions({})
        }
    },[props.match.params.id])
   

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const errors = checkErrors()
        //if no errors then send data
        if(Object.keys(errors).length<1) {
            if (role_has_permissions.permission_id) {
            setLoading(true);
               var updateResponse =  await updateRole_Has_Permissions(role_has_permissions.permission_id,role_has_permissions);
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
                var addResponse = await addRole_Has_Permissions(role_has_permissions);
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
        <PageTemplate title="Add/Update Role_Has_Permissions">
            <Card>
            <CardContent>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
               
                    {(role_has_permissions!==undefined  && permissions!==undefined && roles!==undefined)?
                        <Grid spacing={3} container>
                           <Grid xs={12} md={6} key={"0"} item >
<InputLabel style={{textAlign: 'left'}}>permission_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="permission_id"
                              id="permission_id"
                              value={role_has_permissions.permission_id}
                              onChange ={(e)=>{setRole_Has_Permissions({...role_has_permissions,permission_id:e.target.value});checkErrors()}}>
                              {permissions.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12} md={6} key={"1"} item >
<InputLabel style={{textAlign: 'left'}}>role_id</InputLabel>
        <Select style={{width: '100%',textAlign: 'left'}}
                              labelId ="role_id"
                              id="role_id"
                              value={role_has_permissions.role_id}
                              onChange ={(e)=>{setRole_Has_Permissions({...role_has_permissions,role_id:e.target.value});checkErrors()}}>
                              {roles.map((key)=><MenuItem key={key.id} value={key.id}>{key.name}</MenuItem>)}
                          </Select>
    </Grid>
<Grid xs={12}  md={6} item key={"2"}>
<Grid container justify={"flex-end"} alignContent={"flex-end"}>
<Button onClick={() => history.push('/role_has_permissions')} variant={"contained"} type={"Button"} color="secondary">Cancel</Button>
</Grid>
</Grid>
<Grid xs={12}  md={6} item key={"3"}>
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

export default withRouter(Role_Has_PermissionsAddUpdatePage)
