import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>Items</h3>

        </div>
    )
}

export default OrderDetail