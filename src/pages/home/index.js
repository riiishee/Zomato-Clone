import React, { useState } from 'react';
import Header from '../../component/common/header';
import TabOptions from '../../component/common/tabOptions';
import Footer from '../../component/common/footer';
import Delivery from "../../component/delivery";
import DiningOut from "../../component/diningOut";
import NightLife from '../../component/nightlife';




function HomePage() {

    const [activeTab, setactiveTab] = useState();

  return (
    <>
     <Header />
     <TabOptions activeTab={activeTab} setactiveTab={setactiveTab}/>

     {getCorrectScreen(activeTab)}
     
     
    </>
  )
}

const getCorrectScreen = (tab) => {
switch(tab){
 case  "Delivery":
 return <Delivery />
 case  "Dining Out":
    return <DiningOut />
    case  "Night Life": 
        return <NightLife />
default :
return <Delivery />

}
}



export default HomePage;
