import PageTemplate from "../templates/Template";
import Model_Has_PermissionsTable from "./Model_Has_PermissionsTable";
import React from "react";

const Model_Has_PermissionsPage = (props) => {
    return(
    <PageTemplate title="Model_Has_Permissions List">
        <Model_Has_PermissionsTable/>
    </PageTemplate>)
}
export default Model_Has_PermissionsPage;
