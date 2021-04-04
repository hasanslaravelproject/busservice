import PageTemplate from "../templates/Template";
import CompaniesTable from "./CompaniesTable";
import React from "react";

const CompaniesPage = (props) => {
    return(
    <PageTemplate title="Companies List">
        <CompaniesTable/>
    </PageTemplate>)
}
export default CompaniesPage;
