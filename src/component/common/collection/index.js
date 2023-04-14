import React from 'react';
import './collection.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Slider from 'react-slick';
import '../carousel/nextArrow';
import '../carousel/prevArrow';



const settings ={
  infinite: false,
  slidesToShow: 4,
  nextArrow: <nextArrow />,
  prevArrow: <prevArrow />
}


function Collection({list}) {
  return (
    <div className='collection-wrapper'>
<div className='max-width collection'>


  <div className='collection-title'>Collection</div>
  <div className='collection-subtitle-row'>
<div className='collection-subtitle-text'>
Explore curated lists of top restaurants, 
cafes, pubs, and bars in Delhi NCR, based on trends

</div>
<div className='collection-location'>
<div>All collections in Delhi NCR</div>
<ArrowRightIcon />
</div>
  </div>

 <Slider {...settings}>
 {list.map((item)=>(

  <div>
    <div className='collection-cover'>
 <img src={item.cover} className='collection-image' alt={item.title}
 />   
 <div className='gradient-bg'></div>
 <div className='collection-card-title'>{item.title}</div>
  <div className='collection-card-subtitle'>
   <div>{item.places}</div>
   <ArrowRightIcon />
  </div>
 
 </div>
   </div>
  
 ))}
 </Slider>

 </div>

      
  </div>
  )
  
}

export default Collection
