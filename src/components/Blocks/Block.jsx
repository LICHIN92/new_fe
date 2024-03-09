import React from 'react'
import './Block.css'
import book from '@Assets/appointments-svgrepo-com.svg'
import search from '@Assets/search-globe-svgrepo-com.svg'
import play from '@Assets/ball-football-svgrepo-com.svg'
function Block() {
    return (
        <>
            <div className=' d-flex flex-column flex-md-row justify-content-center w-100 h-50 mt-3 home-box'>
                <div className=' d-flex flex-column  align-items-center text-break p-3 text-center'>
                    <img className='search' src={search} alt="" />
                    <h3>Search</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ratione earum exercitationem aliquam adipisci dolor aperiam deserunt recusandae, possimus rem, voluptates cum suscipit deleniti laboriosam molestiae tempore! Quos, corporis harum.</p>
                </div>

                <div className=' d-flex flex-column align-items-center text-break p-3 text-center'>
                    <img className='search' src={book} alt="" />
                    <h3>Book</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim et rerum necessitatibus, odit delectus accusantium voluptatem vero voluptates non quos, placeat nulla sunt, quidem distinctio. Laboriosam asperiores officia rem in!</p>
                </div>
                <div className=' d-flex flex-column  align-items-center text-break p-3 text-center'>
                    <img className='search' src={play} alt="" />
                    <h3>Play</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maiores distinctio et inventore tenetur nobis quam accusantium, laborum ipsa delectus tempora, aliquid praesentium ducimus! Similique iure placeat vero deserunt neque!</p>
                </div>
            </div>
        </>
    )
}

export default Block