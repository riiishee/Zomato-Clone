import React from 'react';
import './deliverycollections.css'
import Slider from 'react-slick';
import DeliveryItem from './deliveryitem';



const deliveryItem=[
  {
    id:1,
    title:"pizza",
    cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" 

  },
  {
    id:2,
    title:"Biryani",
    cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"

  },
  {
    id:3,
    title:"Thali",
    cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" 

  },
  {
    id:4,
    title:"Burger",
    cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" 

  },
  {
    id:5,
    title:"Chicken",
    cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" 

  },
  {
    id:6,
    title:"Rolls",
    cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" 

  },
  {
    id:7,
    title:"Cake",
    cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" 

  },
  {
    id:8,
    title:"Sandwhich",
    cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png" 

  }
]

const settings ={
  infinite: false,
  slidesToShow: 3,
  nextArrow: <nextArrow />,
  prevArrow: <prevArrow />
}

function DeliveryCollections() {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>

        <div className='collection-title'> Eat What Makes You Happy</div> 
      <Slider className='slider-setting'{...settings}>
        {deliveryItem.map((item)=>{    
          return <DeliveryItem item={item} />
            })}
      </Slider>
      
      </div>
    </div>
  )
}

export default DeliveryCollections;
