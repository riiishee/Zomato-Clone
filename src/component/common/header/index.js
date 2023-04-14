 import React from 'react';
 import './header.css';
 import '../../../styles/commonCssClasses.css';
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import '../../../styles/variable.css'
 import SearchIcon from '@mui/icons-material/Search';

 function Header() {
   return (
     <>
     
    <div className='max-width header'>
      <img className='header-logo'  src="https://w7.pngwing.com/pngs/356/244/png-transparent-zomato-hd-logo.png" alt="logo"/>
   

    <div className='header-right'>
     <div className='header-location-search-container'>
<div className='location-wrapper'>
<div className='location-icon-name'>
       <LocationOnIcon className='absolute-center location-icon'/>
       <div>Delhi</div>
       
</div>
<ArrowDropDownIcon className='absolute-center'/>
</div>

<div className='location-seprator'></div>
<div className='header-search-bar'><SearchIcon className='absolute-center search-icon' />
<input placeholder='Search For Restaurent' className='search-input'/>


</div>
     </div>
    
<div className='profile-wapper'>
  <img src="https://b.zmtcdn.com/data/user_profile_pictures/9a8/0e61336bdee0cde11887c282be5819a8.jpg"  
  className='header-profile-image'/>


<span className='header-username'> Rishi</span>
    <ArrowDropDownIcon className='absolute-center profile-options-icon'/>
    
     </div>
     </div>
     </div>
     </>

     )
     }
     
 
 export default Header;