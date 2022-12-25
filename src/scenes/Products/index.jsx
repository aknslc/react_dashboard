import React, { useState } from 'react'
import ReactModalComp from '../../components/Modal'

import ProductsTable from '../../components/ProductsTable'


const Products = () => {
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <ProductsTable openModal={openModal} closeModal={closeModal} />
      <ReactModalComp modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  )
}

export default Products