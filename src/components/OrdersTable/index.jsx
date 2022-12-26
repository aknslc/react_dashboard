import React from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { orders } from '../../constant';
import styles from './orders.module.scss'
import useFetch from '../../hooks/useFetch';
const columns = [
    { field: 'user', headerName: 'User', width: 170 },
    { field: 'address', headerName: 'Address', width: 170 },
    {
        field: 'items', headerName: 'Items', width: 130,
        renderCell: (params) => {
            console.log()
            return (
                <>
                    <strong>{params.row.items.length}</strong>
                </>
            );
        }
    },
];



const OrdersTable = () => {

    const { data } = useFetch('/orders');


    const actionsColumn = [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='btn btn-outline-info me-4 fs-5' to={`/orders/${params.row._id}`}>Detail</Link>
            
                    </>
                );
            }

        }
    ]
    return (
        <div className={styles.ordersTableContainer}>

            <div style={{ height: 400, width: "100%" }}>
                <div className="header d-flex align-items-center justify-content-between">
                    <h2>Orders</h2>
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

export default OrdersTable