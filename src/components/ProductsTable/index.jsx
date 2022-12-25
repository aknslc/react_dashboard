import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { products } from '../../constant'
import styles from './products.module.scss'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 170 },
    { field: 'category', headerName: 'Category', width: 170 },
    { field: 'description', headerName: 'Description', width: 430 },
    { field: 'price', headerName: 'Price', width: 120 },
];
const ProductsTable = ({ openModal, closeModal }) => {

    const ConfirmFunc = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this product?</p>
                        <button className='btn btn-info me-4 fs-5' onClick={onClose}>No</button>
                        <button
                            onClick={() => {
                                console.log(id);
                                onClose();
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

    const handleDelete = (id) => {
        ConfirmFunc(id);
    }

    const handleNewProduct = () => {
        openModal();
    }

    const actionsColumn = [
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link className='btn btn-outline-info me-4 fs-5' to={`/products/${params.row.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(params.row.id)} className='btn btn-outline-danger me-4 fs-5'>Delete</button>
                    </>
                );
            }

        }
    ]
    return (
        <div className={styles.productsTableContainer}>
            <div className="header d-flex align-items-center justify-content-between">
                <h2>Products</h2>
                <button onClick={handleNewProduct} className='btn btn-success fs-4 me-5'>New Products</button>
            </div>
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={products}
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

export default ProductsTable