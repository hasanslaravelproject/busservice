import PageTemplate from "../templates/Template";
import Model_Has_RolesTable from "./Model_Has_RolesTable";
import React from "react";

const Model_Has_RolesPage = (props) => {
    return(
    <PageTemplate title="Model_Has_Roles List">
        <Model_Has_RolesTable/>
    </PageTemplate>)
}
export default Model_Has_RolesPage;
