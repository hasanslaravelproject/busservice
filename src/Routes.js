import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashboardPage"
import LoginPage from "./components/login/LoginForm";
import SignUpPage from "./components/login/SignUpPage";
import history from './history';


import BusesPage from "./components/buses/BusesPage"
import BusesAddUpdatePage from "./components/buses/BusesAddUpdatePage"
import Bus_CategoriesPage from "./components/bus_categories/Bus_CategoriesPage"
import Bus_CategoriesAddUpdatePage from "./components/bus_categories/Bus_CategoriesAddUpdatePage"
import Bus_RoutesPage from "./components/bus_routes/Bus_RoutesPage"
import Bus_RoutesAddUpdatePage from "./components/bus_routes/Bus_RoutesAddUpdatePage"
import Bus_SchedulesPage from "./components/bus_schedules/Bus_SchedulesPage"
import Bus_SchedulesAddUpdatePage from "./components/bus_schedules/Bus_SchedulesAddUpdatePage"
import CompaniesPage from "./components/companies/CompaniesPage"
import CompaniesAddUpdatePage from "./components/companies/CompaniesAddUpdatePage"
import Failed_JobsPage from "./components/failed_jobs/Failed_JobsPage"
import Failed_JobsAddUpdatePage from "./components/failed_jobs/Failed_JobsAddUpdatePage"
import MigrationsPage from "./components/migrations/MigrationsPage"
import MigrationsAddUpdatePage from "./components/migrations/MigrationsAddUpdatePage"
import Model_Has_PermissionsPage from "./components/model_has_permissions/Model_Has_PermissionsPage"
import Model_Has_PermissionsAddUpdatePage from "./components/model_has_permissions/Model_Has_PermissionsAddUpdatePage"
import Model_Has_RolesPage from "./components/model_has_roles/Model_Has_RolesPage"
import Model_Has_RolesAddUpdatePage from "./components/model_has_roles/Model_Has_RolesAddUpdatePage"
import Oauth_Access_TokensPage from "./components/oauth_access_tokens/Oauth_Access_TokensPage"
import Oauth_Access_TokensAddUpdatePage from "./components/oauth_access_tokens/Oauth_Access_TokensAddUpdatePage"
import Oauth_Auth_CodesPage from "./components/oauth_auth_codes/Oauth_Auth_CodesPage"
import Oauth_Auth_CodesAddUpdatePage from "./components/oauth_auth_codes/Oauth_Auth_CodesAddUpdatePage"
import Oauth_ClientsPage from "./components/oauth_clients/Oauth_ClientsPage"
import Oauth_ClientsAddUpdatePage from "./components/oauth_clients/Oauth_ClientsAddUpdatePage"
import Oauth_Personal_Access_ClientsPage from "./components/oauth_personal_access_clients/Oauth_Personal_Access_ClientsPage"
import Oauth_Personal_Access_ClientsAddUpdatePage from "./components/oauth_personal_access_clients/Oauth_Personal_Access_ClientsAddUpdatePage"
import Oauth_Refresh_TokensPage from "./components/oauth_refresh_tokens/Oauth_Refresh_TokensPage"
import Oauth_Refresh_TokensAddUpdatePage from "./components/oauth_refresh_tokens/Oauth_Refresh_TokensAddUpdatePage"
import Password_ResetsPage from "./components/password_resets/Password_ResetsPage"
import Password_ResetsAddUpdatePage from "./components/password_resets/Password_ResetsAddUpdatePage"
import PermissionsPage from "./components/permissions/PermissionsPage"
import PermissionsAddUpdatePage from "./components/permissions/PermissionsAddUpdatePage"
import Personal_Access_TokensPage from "./components/personal_access_tokens/Personal_Access_TokensPage"
import Personal_Access_TokensAddUpdatePage from "./components/personal_access_tokens/Personal_Access_TokensAddUpdatePage"
import RolesPage from "./components/roles/RolesPage"
import RolesAddUpdatePage from "./components/roles/RolesAddUpdatePage"
import Role_Has_PermissionsPage from "./components/role_has_permissions/Role_Has_PermissionsPage"
import Role_Has_PermissionsAddUpdatePage from "./components/role_has_permissions/Role_Has_PermissionsAddUpdatePage"
import Seat_ClassesPage from "./components/seat_classes/Seat_ClassesPage"
import Seat_ClassesAddUpdatePage from "./components/seat_classes/Seat_ClassesAddUpdatePage"
import ServicesPage from "./components/services/ServicesPage"
import ServicesAddUpdatePage from "./components/services/ServicesAddUpdatePage"
import UsersPage from "./components/users/UsersPage"
import UsersAddUpdatePage from "./components/users/UsersAddUpdatePage"


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/signup" exact component={SignUpPage}/>
                <Route path="/dashboard" exact component={DashboardPage}/>
                <Route path="/buses" exact component={BusesPage}/>
<Route path="/buses/add" exact component={BusesAddUpdatePage}/>
<Route path="/buses/update/:id" exact component={BusesAddUpdatePage}/>
<Route path="/bus_categories" exact component={Bus_CategoriesPage}/>
<Route path="/bus_categories/add" exact component={Bus_CategoriesAddUpdatePage}/>
<Route path="/bus_categories/update/:id" exact component={Bus_CategoriesAddUpdatePage}/>
<Route path="/bus_routes" exact component={Bus_RoutesPage}/>
<Route path="/bus_routes/add" exact component={Bus_RoutesAddUpdatePage}/>
<Route path="/bus_routes/update/:id" exact component={Bus_RoutesAddUpdatePage}/>
<Route path="/bus_schedules" exact component={Bus_SchedulesPage}/>
<Route path="/bus_schedules/add" exact component={Bus_SchedulesAddUpdatePage}/>
<Route path="/bus_schedules/update/:id" exact component={Bus_SchedulesAddUpdatePage}/>
<Route path="/companies" exact component={CompaniesPage}/>
<Route path="/companies/add" exact component={CompaniesAddUpdatePage}/>
<Route path="/companies/update/:id" exact component={CompaniesAddUpdatePage}/>
<Route path="/failed_jobs" exact component={Failed_JobsPage}/>
<Route path="/failed_jobs/add" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/failed_jobs/update/:id" exact component={Failed_JobsAddUpdatePage}/>
<Route path="/migrations" exact component={MigrationsPage}/>
<Route path="/migrations/add" exact component={MigrationsAddUpdatePage}/>
<Route path="/migrations/update/:id" exact component={MigrationsAddUpdatePage}/>
<Route path="/model_has_permissions" exact component={Model_Has_PermissionsPage}/>
<Route path="/model_has_permissions/add" exact component={Model_Has_PermissionsAddUpdatePage}/>
<Route path="/model_has_permissions/update/:id" exact component={Model_Has_PermissionsAddUpdatePage}/>
<Route path="/model_has_roles" exact component={Model_Has_RolesPage}/>
<Route path="/model_has_roles/add" exact component={Model_Has_RolesAddUpdatePage}/>
<Route path="/model_has_roles/update/:id" exact component={Model_Has_RolesAddUpdatePage}/>
<Route path="/oauth_access_tokens" exact component={Oauth_Access_TokensPage}/>
<Route path="/oauth_access_tokens/add" exact component={Oauth_Access_TokensAddUpdatePage}/>
<Route path="/oauth_access_tokens/update/:id" exact component={Oauth_Access_TokensAddUpdatePage}/>
<Route path="/oauth_auth_codes" exact component={Oauth_Auth_CodesPage}/>
<Route path="/oauth_auth_codes/add" exact component={Oauth_Auth_CodesAddUpdatePage}/>
<Route path="/oauth_auth_codes/update/:id" exact component={Oauth_Auth_CodesAddUpdatePage}/>
<Route path="/oauth_clients" exact component={Oauth_ClientsPage}/>
<Route path="/oauth_clients/add" exact component={Oauth_ClientsAddUpdatePage}/>
<Route path="/oauth_clients/update/:id" exact component={Oauth_ClientsAddUpdatePage}/>
<Route path="/oauth_personal_access_clients" exact component={Oauth_Personal_Access_ClientsPage}/>
<Route path="/oauth_personal_access_clients/add" exact component={Oauth_Personal_Access_ClientsAddUpdatePage}/>
<Route path="/oauth_personal_access_clients/update/:id" exact component={Oauth_Personal_Access_ClientsAddUpdatePage}/>
<Route path="/oauth_refresh_tokens" exact component={Oauth_Refresh_TokensPage}/>
<Route path="/oauth_refresh_tokens/add" exact component={Oauth_Refresh_TokensAddUpdatePage}/>
<Route path="/oauth_refresh_tokens/update/:id" exact component={Oauth_Refresh_TokensAddUpdatePage}/>
<Route path="/password_resets" exact component={Password_ResetsPage}/>
<Route path="/password_resets/add" exact component={Password_ResetsAddUpdatePage}/>
<Route path="/password_resets/update/:id" exact component={Password_ResetsAddUpdatePage}/>
<Route path="/permissions" exact component={PermissionsPage}/>
<Route path="/permissions/add" exact component={PermissionsAddUpdatePage}/>
<Route path="/permissions/update/:id" exact component={PermissionsAddUpdatePage}/>
<Route path="/personal_access_tokens" exact component={Personal_Access_TokensPage}/>
<Route path="/personal_access_tokens/add" exact component={Personal_Access_TokensAddUpdatePage}/>
<Route path="/personal_access_tokens/update/:id" exact component={Personal_Access_TokensAddUpdatePage}/>
<Route path="/roles" exact component={RolesPage}/>
<Route path="/roles/add" exact component={RolesAddUpdatePage}/>
<Route path="/roles/update/:id" exact component={RolesAddUpdatePage}/>
<Route path="/role_has_permissions" exact component={Role_Has_PermissionsPage}/>
<Route path="/role_has_permissions/add" exact component={Role_Has_PermissionsAddUpdatePage}/>
<Route path="/role_has_permissions/update/:id" exact component={Role_Has_PermissionsAddUpdatePage}/>
<Route path="/seat_classes" exact component={Seat_ClassesPage}/>
<Route path="/seat_classes/add" exact component={Seat_ClassesAddUpdatePage}/>
<Route path="/seat_classes/update/:id" exact component={Seat_ClassesAddUpdatePage}/>
<Route path="/services" exact component={ServicesPage}/>
<Route path="/services/add" exact component={ServicesAddUpdatePage}/>
<Route path="/services/update/:id" exact component={ServicesAddUpdatePage}/>
<Route path="/users" exact component={UsersPage}/>
<Route path="/users/add" exact component={UsersAddUpdatePage}/>
<Route path="/users/update/:id" exact component={UsersAddUpdatePage}/>

                </Switch>
            </Router>
        )
    }
}
