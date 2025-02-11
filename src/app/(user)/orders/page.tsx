import Container from '@/components/Container'
import Orders from '@/components/Orders'
import React from 'react'

const OrdersPage = () => {
  return (
    <Container className='py-10'>
        <h2 className='text-2xl font-semibold'>Your Orders</h2>
        <Orders />
    </Container>
  )
}

export default OrdersPage