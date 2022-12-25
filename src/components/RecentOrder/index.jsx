import React from 'react'
import styles from './recentorder.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { recentOrders } from '../../constant'

const StatusButton = () => {

    return (
        <>
            <button className='btn btn-warning btn-sm fs-5 text-uppercase text-secondary px-4'>Pending</button>
        </>
    );
};

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 170 },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
        renderCell: (params) => <StatusButton/>
    },
    { field: 'address', headerName: 'Address', width: 430 },
    { field: 'createdAt', headerName: 'Created At', width: 150 },

];

const RecentOrder = () => {
    return (
        <div className={styles.recentOrderTable}>
            <h2>Recent Orders</h2>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={recentOrders}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    sx={{ 
                        fontSize:"1.4rem",
                        border:"1px solid #f3f3f3",
                        borderRadius: "15px",
                        boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.03)",
                        color:"#56606E",
                        fontWeight:"400"
                    }}
                />
            </div>
        </div>
    )
}

export default RecentOrder