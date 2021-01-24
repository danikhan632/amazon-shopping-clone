import './css/Orders.css'
import React, { Component, useState, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Order from './Order'
import { db } from '../firebase.js';
function Orders() {
    const [orders,setOrders]=useState([])
    const [{ basket, user }, dispatch] = useStateValue();
    console.log(orders);
    useEffect(() =>{
       if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
       }
       else{
           setOrders([]);
       }
        
    },[user])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders_orders'>
                {orders?.map(order => (
                    <Order order = {order} />
                ))}
            </div>
        </div>
    )
}

export default Orders

