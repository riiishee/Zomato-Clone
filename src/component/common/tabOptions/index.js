import React from 'react';
import './tabOption.css'


const tabs=[
  {
id:1,
Name: "Delivery",
active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" ,
backdrop: "#FCEEC0",
inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },


  {
id:2,
Name: "Dining Out",
active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" ,
backdrop: "#FCEEC0",
inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" ,
  },


  {
id:3,
Name: "Night Life",
active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png" ,
backdrop: "#FCEEC0",
inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" ,
  },
]

const TabOptions = ({activeTab, setactiveTab}) =>{
       return (
             <>
          <div className='tab-options'> 
          <div className='max-width option-wrapper'>


            { tabs.map((tab)=>{
return <div onClick={()=> setactiveTab(tab.Name)}
className={'tab-item absolute-center cur-po ${activeTab===tab.Name && "active-tab"}'}
>
<div className='tab-image-container absolute-center'
style={{backgroundColor: `${activeTab===tab.Name?tab.backdrop:""}`}}
>

<img className='tab-image' alt={tab.Name} src={
  activeTab===tab.Name?tab.active_img:tab.inactive_img} >


  </img>

</div>

<div className='tab-name'>{tab.Name}</div>



</div>

            })



            }




          </div>
          
          
          
          
          </div>

           
           </>
       );
}



 export default TabOptions;
