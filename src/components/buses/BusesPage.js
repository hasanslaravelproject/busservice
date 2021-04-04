import PageTemplate from "../templates/Template";
import BusesTable from "./BusesTable";
import React from "react";

const BusesPage = (props) => {
    return(
    <PageTemplate title="Buses List">
        <BusesTable/>
    </PageTemplate>)
}
export default BusesPage;
