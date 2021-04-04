import PageTemplate from "../templates/Template";
import Oauth_Auth_CodesTable from "./Oauth_Auth_CodesTable";
import React from "react";

const Oauth_Auth_CodesPage = (props) => {
    return(
    <PageTemplate title="Oauth_Auth_Codes List">
        <Oauth_Auth_CodesTable/>
    </PageTemplate>)
}
export default Oauth_Auth_CodesPage;
