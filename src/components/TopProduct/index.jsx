import React from 'react'
import styles from './topProduct.module.scss'
import { DataGrid } from '@mui/x-data-grid';

import {topProducts} from '../../constant'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 170 },
    { field: 'sales', headerName: 'Sales', width: 100 },

];

const TopProduct = () => {
    return (
        <div className={`${styles.topProducts} col-lg-6 col-md-12 col-sm-12`}>
            <h2>Top Products</h2>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={topProducts}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    sx={{
                        fontSize: "1.4rem",
                        border: "1px solid #f3f3f3",
                        borderRadius: "15px",
                        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.03)",
                        color: "#56606E",
                        fontWeight: "100"
                    }}
                />
            </div>
        </div>
    )
}

export default TopProduct