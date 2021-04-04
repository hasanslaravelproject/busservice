import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TableChartIcon from '@material-ui/icons/TableChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import history from './../../history';

export const mainListItems = (
  <div>
    <ListItem button onClick={() => history.push('/dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => history.push('/buses')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Buses" />
</ListItem><ListItem button onClick={() => history.push('/bus_categories')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Bus_Categories" />
</ListItem><ListItem button onClick={() => history.push('/bus_routes')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Bus_Routes" />
</ListItem><ListItem button onClick={() => history.push('/bus_schedules')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Bus_Schedules" />
</ListItem><ListItem button onClick={() => history.push('/companies')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Companies" />
</ListItem><ListItem button onClick={() => history.push('/failed_jobs')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Failed_Jobs" />
</ListItem><ListItem button onClick={() => history.push('/migrations')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Migrations" />
</ListItem><ListItem button onClick={() => history.push('/model_has_permissions')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Model_Has_Permissions" />
</ListItem><ListItem button onClick={() => history.push('/model_has_roles')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Model_Has_Roles" />
</ListItem><ListItem button onClick={() => history.push('/oauth_access_tokens')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Oauth_Access_Tokens" />
</ListItem><ListItem button onClick={() => history.push('/oauth_auth_codes')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Oauth_Auth_Codes" />
</ListItem><ListItem button onClick={() => history.push('/oauth_clients')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Oauth_Clients" />
</ListItem><ListItem button onClick={() => history.push('/oauth_personal_access_clients')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Oauth_Personal_Access_Clients" />
</ListItem><ListItem button onClick={() => history.push('/oauth_refresh_tokens')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Oauth_Refresh_Tokens" />
</ListItem><ListItem button onClick={() => history.push('/password_resets')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Password_Resets" />
</ListItem><ListItem button onClick={() => history.push('/permissions')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Permissions" />
</ListItem><ListItem button onClick={() => history.push('/personal_access_tokens')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Personal_Access_Tokens" />
</ListItem><ListItem button onClick={() => history.push('/roles')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Roles" />
</ListItem><ListItem button onClick={() => history.push('/role_has_permissions')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Role_Has_Permissions" />
</ListItem><ListItem button onClick={() => history.push('/seat_classes')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Seat_Classes" />
</ListItem><ListItem button onClick={() => history.push('/services')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Services" />
</ListItem><ListItem button onClick={() => history.push('/users')}>
<ListItemIcon><TableChartIcon /></ListItemIcon>
<ListItemText primary="Users" />
</ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button onClick={() => history.push('/signup')}>
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
      <ListItemText primary="SignUp" />
    </ListItem>
    <ListItem button onClick={() => history.push('/')}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
   
  </div>
);
