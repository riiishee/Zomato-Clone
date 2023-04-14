import React from 'react';
import './diningOut.css'
import Collection from '../common/collection';
import TuneIcon from '@mui/icons-material/Tune';

import ExploreSection from '../common/explore';
import {diningOut} from '../../data/diningOut'


const CollectionList=[
  {
    id: "2",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "17 places",
  },

  // {
  //   id: "3",
  //   title:"trending this week",
  //   cover: "https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg",
  //   places: "12 places",
  // },
  {
    id: "4",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places: "12 places",
  },
  {
    id: "5",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },
  {
    id: "6",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },
  {
    id: "7",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },
  {
    id: "8",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },


  {
    id: "9",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },
  {
    id: "10",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png",
    places: "12 places",
  },



]

const diningFillters=[
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

const diningList = diningOut

function DiningOut() {
  return (
    <>
    <div>
     <Collection list={CollectionList}/>
    </div>
   <ExploreSection list={diningList} collectionName="Best Dining Restaurants near you in Delhi NCR" />
   </>
  )
}

export default DiningOut
