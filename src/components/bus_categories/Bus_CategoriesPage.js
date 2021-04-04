import PageTemplate from "../templates/Template";
import Bus_CategoriesTable from "./Bus_CategoriesTable";
import React from "react";

const Bus_CategoriesPage = (props) => {
    return(
    <PageTemplate title="Bus_Categories List">
        <Bus_CategoriesTable/>
    </PageTemplate>)
}
export default Bus_CategoriesPage;
