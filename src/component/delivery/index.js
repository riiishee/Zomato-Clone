import React from 'react';
import "./delivery.css"
import Fillters from '../common/fillters';
import TuneIcon from '@mui/icons-material/Tune';
import DeliveryCollections from './deliverycollection';
import TopBrands from './topBrands'
import ExploreSection from '../common/explore';
import { restaurants } from '../../data/restaurants';


const deliveryFillters=[
  {
    id: 1,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Fiters"

  },
  {
    id: 2,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Rating: 4.0+"

  },
  {
    id: 3,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Safe and Hygienic"

  },
  {
    id: 4,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Pure Veg"

  },
  {
    id: 5,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Delivery Time"

  },

  {
    id: 6,
    icon: <TuneIcon  className='absolute-center'/>,
    title: "Great Offers"

  },

  
]

const restaurentsList = restaurants;

function Delivery() {
  return (
    <>
      <div className='max-width'>
      <Fillters filterList={deliveryFillters } />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection  list={restaurentsList} collectionName= "Delivery Restaurents in NCR " />
    </>
  )
}

export default Delivery;
