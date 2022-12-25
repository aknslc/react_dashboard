import React from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { users } from '../../constant';
import styles from './users.module.scss'
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 170 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'isAdmin', headerName: 'isAdmin', width: 100 },
];
const UserTable = () => {

    const deleteUser = () => {

    }
    const actionsColumn = [
        {
            field: 'actions',
            headerName: 'Detail',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link onClick={deleteUser} className='btn btn-outline-danger me-4 fs-5' to={`/orders/${params.row.id}`}>Delete</Link>
                    </>
                );
            }

        }
    ]
    return (
        <div className={styles.usersTableContainer}>
            <div style={{ height: 400, width: "100%" }}>
                <div className="header d-flex align-items-center justify-content-between">
                    <h2>Users</h2>
                </div>
                <DataGrid
                    rows={users}
                    columns={columns.concat(actionsColumn)}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    sx={{
                        fontSize: "1.4rem",
                        border: "1px solid #f3f3f3",
                        borderRadius: "15px",
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.03)",
                        color: "#56606E",
                        fontWeight: "400"
                    }}
                />
            </div>
        </div>
    )
}

export default UserTable