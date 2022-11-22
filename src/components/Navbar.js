import React, { useEffect,useRef } from 'react';
function Navbar({changeTheme,currentTheme}){
  let ref=useRef(); 
  const toggleTheme = () => {
    if (currentTheme === 'light') {
      changeTheme('dark');
    console.log(currentTheme);
    } else {
      changeTheme('light');
    
    }
  };
  useEffect(()=>{
    if(currentTheme==='light'){
      ref.current.style.backgroundColor='#ffff';
    }else{
      ref.current.style.backgroundColor='#212429';
    }
  },[currentTheme])
  
  return(

  <>
  <div className="top-nav " ref={ref}>
    <p className="title-nav">TextUtils</p>
    <p className="title-nav">Home</p>

    {/* <span className="home">Home</span> */}
    <div className="toggle">
      <label className="switch">
        <input type="checkbox"onClick={toggleTheme}/>
          <span className="slider round"></span>
      </label>

    </div>
   
  </div>
  
  </>
  )
}
export default Navbar;