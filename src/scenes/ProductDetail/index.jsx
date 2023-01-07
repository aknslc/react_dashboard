import React from 'react'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
const ProductDetail = () => {

    const { id } = useParams();
    const { data } = useFetch(`/products/${id}`)


    const formik = useFormik({
        initialValues: {
            title: data.title || '',
            description: data.description || '',
            price: data.price || '',
            category: data.category || '',
        },
        onSubmit: async values => {
            const res = await axios.put(`${process.env.REACT_APP_BASE_URL}/products/${id}`, values);
            alert('updated')
        },
        enableReinitialize: true
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Product Edit Page</h2>
                <label htmlFor="firstName">Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                    disabled={formik.isSubmitting}
                />
                <label htmlFor="lastName">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                <label htmlFor="email">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                <label htmlFor="email">Category</label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                />
                <button className='btn btn-success fs-4' type="submit">Edit Product</button>
            </form>
        </div>
    )
}

export default ProductDetail