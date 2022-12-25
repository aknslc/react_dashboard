import React from 'react'
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const {id} = useParams();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            category:''
        },
        onSubmit: values => {
            console.log(values);
        },
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
                    value={formik.values.title}
                />
                <label htmlFor="lastName">Description</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                <label htmlFor="email">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                <label htmlFor="email">Category</label>
                <input
                    id="category"
                    name="category"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                />
                <button className='btn btn-success fs-4' type="submit">Edit Product</button>
            </form>
        </div>
    )
}

export default ProductDetail