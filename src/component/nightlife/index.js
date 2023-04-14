import React from 'react';
import './nightLife.css';
import Collection from '../common/collection';
import TuneIcon from '@mui/icons-material/Tune';
import '../../component/common/fillters'
import Fillters from '../../component/common/fillters';
import { nightLife } from '../../data/nightlife';
import '../../component/common/explore/exploreCard/index'
import ExploreSection from '../common/explore';


const CollectionList=[
  {
    id: "2",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg",
    places: "19 places",
  },
  {
    id: "4",
    title:"trending this week",
    cover: "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg",
    places: "18 places",
  },
  


]


const nightLifeFillters=[
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


const nightList = nightLife;

function NightLife() {
  return (
    <div className='max-width'>
    <Fillters filterList={nightLifeFillters} />
    <Collection list={CollectionList} />
<ExploreSection list={nightList} collectionName="Nightlife Restaurants in Delhi NCR" />
  
    </div>
  )
}

export default NightLife
