import React from 'react'
import Modal from 'react-modal';
import { Field, useFormik } from 'formik';
import axios from 'axios'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: "50%",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: "1px solid #C5E8FF",
        padding: "3rem"

    },
};

const ReactModalComp = ({ modalIsOpen, closeModal }) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            category: '',
            images: [''],
        },
        onSubmit: async values => {
            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/products`, values)
            window.location.reload();
        },
    });

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <form onSubmit={formik.handleSubmit}>
                    <h2>Add New Product</h2>

                    <div>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            placeholder='Title'
                        />
                    </div>

                    <div>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            placeholder='Description'
                        />
                    </div>

                    <div>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            placeholder='Price'
                        />
                    </div>
                    <div>
                        <input
                            id="images"
                            name="images"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.images}
                            placeholder='Images'
                        />
                    </div>
                    <select
                        name="category"
                        id="category"
                        onChange={formik.handleChange}
                        value={formik.values.category}
                        style={{
                            padding: "1rem",
                            fontSize:"1.6rem",
                            outline:"none",
                            border:"1px solid #C5E8FF",
                            marginTop:"2rem"

                        }}
                    >
                        <option value="" label="Select a category">
                            Select a color{" "}
                        </option>
                        <option value="shoes" label="shoes">
                            {" "}
                            Shoes
                        </option>
                        <option value="watch" label="watch">
                            {" "}
                            Watch
                        </option>
                        <option value="handbag" label="handbag">
                            {" "}
                            Handbag
                        </option>
                    </select>
                    <button className='btn btn-success btn-lg w-100 fs-3 mt-5' type="submit">ADD NEW PRODUCT</button>
                </form>
            </Modal>
        </div>
    )
}

export default ReactModalComp