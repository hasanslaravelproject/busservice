import PageTemplate from "../templates/Template";
import Oauth_Refresh_TokensTable from "./Oauth_Refresh_TokensTable";
import React from "react";

const Oauth_Refresh_TokensPage = (props) => {
    return(
    <PageTemplate title="Oauth_Refresh_Tokens List">
        <Oauth_Refresh_TokensTable/>
    </PageTemplate>)
}
export default Oauth_Refresh_TokensPage;
