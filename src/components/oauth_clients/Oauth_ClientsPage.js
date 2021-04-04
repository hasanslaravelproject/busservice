import PageTemplate from "../templates/Template";
import Oauth_ClientsTable from "./Oauth_ClientsTable";
import React from "react";

const Oauth_ClientsPage = (props) => {
    return(
    <PageTemplate title="Oauth_Clients List">
        <Oauth_ClientsTable/>
    </PageTemplate>)
}
export default Oauth_ClientsPage;
