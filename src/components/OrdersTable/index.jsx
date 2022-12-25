import React from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { orders } from '../../constant';
import styles from './orders.module.scss'
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 170 },
    { field: 'address', headerName: 'Address', width: 170 },
    { field: 'items', headerName: 'Items', width: 130 },
];
const OrdersTable = () => {


    const handleOrderDetail = () => {

    }

    const actionsColumn = [
        {
            field: 'actions',
            headerName: 'Detail',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link onClick={handleOrderDetail} className='btn btn-outline-info me-4 fs-5' to={`/orders/${params.row.id}`}>Detail</Link>
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
                    rows={orders}
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

export default OrdersTable