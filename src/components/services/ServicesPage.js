import PageTemplate from "../templates/Template";
import ServicesTable from "./ServicesTable";
import React from "react";

const ServicesPage = (props) => {
    return(
    <PageTemplate title="Services List">
        <ServicesTable/>
    </PageTemplate>)
}
export default ServicesPage;
