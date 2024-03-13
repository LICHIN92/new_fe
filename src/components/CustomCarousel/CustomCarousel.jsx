import React from 'react'
import './CustomCarousel.css'
import crickball from '@Assets/cricketBall.avif'
import criccket from '@Assets/photo-1562077772-3bd90403f7f0.avif'
function CustomCarousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-container " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={crickball} className="d-block w-100 " alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='hh'>First slide label</h5>
                        <p>Discover joy in every jump,laughter in every swing</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={criccket} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Play is the key to happy heart.Drive into the fun!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={crickball} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Little moments, big memories - let the playground adventures begin!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CustomCarousel