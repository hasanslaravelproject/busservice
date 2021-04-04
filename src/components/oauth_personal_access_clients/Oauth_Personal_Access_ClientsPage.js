import PageTemplate from "../templates/Template";
import Oauth_Personal_Access_ClientsTable from "./Oauth_Personal_Access_ClientsTable";
import React from "react";

const Oauth_Personal_Access_ClientsPage = (props) => {
    return(
    <PageTemplate title="Oauth_Personal_Access_Clients List">
        <Oauth_Personal_Access_ClientsTable/>
    </PageTemplate>)
}
export default Oauth_Personal_Access_ClientsPage;
