import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './Role_Has_PermissionsColumns';
import Edit from "@material-ui/icons/Edit";
import { Switch } from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteRole_Has_Permissions, getRole_Has_Permissions} from "../../repo/role_has_permissionsRepo";
import { Loading } from "../templates/Loading";
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const Role_Has_PermissionsTable = (props) => {
    const history = props.history;
    const [columns, setColumns] = useState(getColumns({}));
    const [loading, setLoading] = useState(false);
    //Here we call delete
    const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
        deleteRole_Has_Permissions(oldData.permission_id)
            .then(res => {
                resolve();
                setLoading(false);
            })
            .catch(error => {
                resolve();
                setLoading(false);
            })
    }


    return (
    <div>
    <MaterialTable
        minRows={20}
        title="Role_Has_Permissions Data"
        columns={columns}
        data={async(query)=>
            {   setLoading(true);
                const res = await getRole_Has_Permissions(query.page,query.pageSize,query.search);
                setLoading(false);
                return ({
                    data: res.data,
                    page: query.page,
                    totalCount: parseInt(res.total)
                })
            }
        }
        options={{
            sorting:true,
            actionsColumnIndex: -1,
            pageSize: 20,
            toolbar: true,
            paging: true
        }}

        actions={[
            {
                icon: ()=> <Edit/>,
                tooltip: 'Edit',
                onClick: (event,rowData) =>{
                    history.push({
                        pathname:`/role_has_permissions/update/${rowData.permission_id}`,
                        user:rowData
                    })
                }
            },
            {
            icon: ()=><AddBox variant="contained" color="secondary"/>,
                tooltip: 'Add New',
                // This makes add button to appear in table toolbar instead for each row
                isFreeAction: true,
                onClick: (event, rowData) => {
                    history.push("/role_has_permissions/add")
                }
            }
        ]}

        icons={tableIcons}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}

      />
    </div>);
}
export default withRouter(Role_Has_PermissionsTable);
