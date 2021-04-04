import PageTemplate from "../templates/Template";
import Oauth_Access_TokensTable from "./Oauth_Access_TokensTable";
import React from "react";

const Oauth_Access_TokensPage = (props) => {
    return(
    <PageTemplate title="Oauth_Access_Tokens List">
        <Oauth_Access_TokensTable/>
    </PageTemplate>)
}
export default Oauth_Access_TokensPage;
