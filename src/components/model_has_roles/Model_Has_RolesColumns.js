import { Switch } from '@material-ui/core';
import React from 'react';
import Avatar from 'react-avatar';
import Input from "@material-ui/core/Input";

/*
In order to validate errors on the input field you can
override the editComponent of the Material Table to add a new material-ui Input fields
and use props for validation.
Information on material-ui Input element https://material-ui.com/api/input/
Information on material-table Props https://material-table.com/#/docs/all-props
You can also find an example of an overridden element bellow. Overriding the render method is not a must.
 */
const GetModel_Has_RolesColumns = (totalCount) => [
  {title: "RoleId", field: "role_id",hidden:true},
{title: "ModelType", field: "model_type",hidden:true},
{title: "ModelId", field: "model_id",hidden:true},

  {title: "RoleIdValue", field: "role_id_Value"},

]
export default GetModel_Has_RolesColumns;
