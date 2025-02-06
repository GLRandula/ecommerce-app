import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import React from 'react'

const ShopPage = () => {
  return (
    <Container className='py-5'>
        <h2 className='text-2xl font-bold mb-5'>All Available Product List:</h2>
        <ProductList />
    </Container>
  )
}

export default ShopPage
