import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { users } from '../../constant';
import styles from './users.module.scss'
import useFetch from '../../hooks/useFetch';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 170 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'isAdmin', headerName: 'isAdmin', width: 100 },
];
const UserTable = () => {

    const ConfirmFunc = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this user?</p>
                        <button className='btn btn-info me-4 fs-5' onClick={onClose}>No</button>
                        <button
                            onClick={async () => {
                                await axios.delete(`users/${id}`)
                                onClose();
                                window.location.reload()
                            }}
                            className="btn btn-danger fs-3 "
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                );
            }
        });
    };

    const { data } = useFetch('/users')

    const deleteUser = (id) => {
        ConfirmFunc(id)
    }
    const actionsColumn = [
        {
            field: 'actions',
            headerName: 'Detail',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button onClick={() => deleteUser(params.row._id)} className='btn btn-outline-danger me-4 fs-5'>Delete</button>
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
                    rows={data}
                    columns={columns.concat(actionsColumn)}
                    pageSize={5}
                    getRowId={(row) => row._id}
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