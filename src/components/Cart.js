import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart, removeItem } from './utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItem = () => {
        dispatch(removeItem());
    }
  return (
    <div className='text-center m-4 p-4'>
        <h1 className='font-bold '>Cart</h1>
        <div className='w-6/12 m-auto '>
            <button className='p-2 m-2 rounded-lg bg-black text-white' onClick={handleClearCart}>Clear Cart</button>
            <button className='p-2 m-2 rounded-lg bg-black text-white' onClick={handleRemoveItem}>Remove Item</button>
            {cartItems.length === 0 && <h1>Your cart is empty add some items to it...</h1>}
        <ItemList items={cartItems} />
        </div>
    </div>
  )
}

export default Cart