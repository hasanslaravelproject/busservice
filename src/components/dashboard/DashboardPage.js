import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./DashboardCard"

const DashboardPage = () => {

    return(
    <PageTemplate title="Dashboard">
    <Grid container direction="row"  justify="center" alignItems="center">
    <DashCard pagename='buses'/>
<DashCard pagename='bus_categories'/>
<DashCard pagename='bus_routes'/>
<DashCard pagename='bus_schedules'/>
<DashCard pagename='companies'/>
<DashCard pagename='failed_jobs'/>
<DashCard pagename='migrations'/>
<DashCard pagename='model_has_permissions'/>
<DashCard pagename='model_has_roles'/>
<DashCard pagename='oauth_access_tokens'/>
<DashCard pagename='oauth_auth_codes'/>
<DashCard pagename='oauth_clients'/>
<DashCard pagename='oauth_personal_access_clients'/>
<DashCard pagename='oauth_refresh_tokens'/>
<DashCard pagename='password_resets'/>
<DashCard pagename='permissions'/>
<DashCard pagename='personal_access_tokens'/>
<DashCard pagename='roles'/>
<DashCard pagename='role_has_permissions'/>
<DashCard pagename='seat_classes'/>
<DashCard pagename='services'/>
<DashCard pagename='users'/>

    
    
    
    </Grid>
    </PageTemplate>)
}
export default DashboardPage;

