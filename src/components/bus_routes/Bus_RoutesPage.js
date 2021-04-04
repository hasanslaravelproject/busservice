import PageTemplate from "../templates/Template";
import Bus_RoutesTable from "./Bus_RoutesTable";
import React from "react";

const Bus_RoutesPage = (props) => {
    return(
    <PageTemplate title="Bus_Routes List">
        <Bus_RoutesTable/>
    </PageTemplate>)
}
export default Bus_RoutesPage;
