import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import styles from './orderdetail.module.scss'

const OrderDetail = () => {
    const { id } = useParams();
    const { data } = useFetch(`/orders/${id}`);

    return (
        <div>
            <div className={styles.productHeader}>
                <div className='fs-3 fw-bold mb-3'>Image</div>
                <div className='fs-3 fw-bold mb-3'>Detail</div>
            </div>
            <div>{data.items?.map((item, index) => {

                return (
                    <div className={styles.product}>
                        <div className={styles.productImgDiv}>
                            <img src={item.images[0]} alt="" />
                        </div>
                        <div className={styles.productContent}>
                            <div className={styles.title}><span>Product Title:</span> {item.title}</div>
                            <div className={styles.amount}><span>Product Amount:</span> {item.amount}</div>
                        </div>
                    </div>

                )
            })}
            </div>
        </div>
    )
}

export default OrderDetail