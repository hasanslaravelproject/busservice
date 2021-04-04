import PageTemplate from "../templates/Template";
import Seat_ClassesTable from "./Seat_ClassesTable";
import React from "react";

const Seat_ClassesPage = (props) => {
    return(
    <PageTemplate title="Seat_Classes List">
        <Seat_ClassesTable/>
    </PageTemplate>)
}
export default Seat_ClassesPage;
