import PageTemplate from "../templates/Template";
import Role_Has_PermissionsTable from "./Role_Has_PermissionsTable";
import React from "react";

const Role_Has_PermissionsPage = (props) => {
    return(
    <PageTemplate title="Role_Has_Permissions List">
        <Role_Has_PermissionsTable/>
    </PageTemplate>)
}
export default Role_Has_PermissionsPage;
