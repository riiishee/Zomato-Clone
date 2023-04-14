import React from 'react';
import './topBrand.css';
import nextArrow from '../../common/carousel/nextArrow';
import prevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';


const  TopBrandsList = [
    {
        id: 1,
       time: " 21 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png"

    },
    {
        id: 2,
       time: " 25 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png"
    },
    {
        id: 3,
       time: " 23 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png"

    },
    {
        id: 4,
       time: " 35 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png"

    },
    {
        id: 5,
       time: " 35 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8570f78c741c5563154525c55808ed30_1649256072.png"

    },
    {
        id: 6,
       time: " 35 min",
       cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png"

    },

];

const settings = {
    slidesToShow:4,
    slidesToScroll: 1,
    nextArrow: <nextArrow />,
    prevArrow: <prevArrow />
}

function    TopBrands() {
  return (
    <>
    <div className='top-brands max-width'>
    <div className='collection-title'>Top Brands For You</div>
      <Slider {...settings}>
{TopBrandsList.map((brand)=>{
    return <div>
        <div className='top-brands-cover'>
            <img src={brand.cover} className='top-brands-image' alt={brand.time}
        
        />
        </div>
    </div>
})}

      </Slider>
    </div>
    </>
  )
}

export default TopBrands;
