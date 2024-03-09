import React from 'react'
import './UspBlock.css'
import users from '@Assets/10000+users.svg'
import location from '@Assets/locations-svgrepo-com.svg'
import slott from '@Assets/time-svgrepo-com.svg'
import accessories from "@Assets/football-svgrepo-com.svg"
function UspBlock() {
    return (
        <div className=' d-flex flex-wrap justify-content-center w-100 mt-3 brand-promo-container gap-3'>
            <div className=' brand-promo-box text-center'>
                <h4>10000+</h4>
                <p>Happy Customers</p>
                <img src={users} alt="" />
            </div>
            <div className=' brand-promo-box text-center'>
                <h4>100+ locations</h4>
                <p>Available 20+ States In India </p>
                <img src={location} alt="" />
            </div>
            <div className=' brand-promo-box text-center'>
                <h4>24/7 access</h4>
                <p>Choose Favorite Slots</p>
                <img src={slott} alt="" />
            </div>
            <div className=' brand-promo-box text-center'>
                <h4>Welcome Offers</h4>
                <p>Get Free AccessTo All Courts</p>
                <img src={accessories}  alt="" />
            </div>
            <div className=' brand-promo-box text-center'>
                <h4>Free And Rented Accessories</h4>
                <p>Happy Customers</p>
                <img src= ''alt="" />

            </div>
        </div>
    )
}

export default UspBlock