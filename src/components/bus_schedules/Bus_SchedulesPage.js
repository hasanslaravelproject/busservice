import PageTemplate from "../templates/Template";
import Bus_SchedulesTable from "./Bus_SchedulesTable";
import React from "react";

const Bus_SchedulesPage = (props) => {
    return(
    <PageTemplate title="Bus_Schedules List">
        <Bus_SchedulesTable/>
    </PageTemplate>)
}
export default Bus_SchedulesPage;
