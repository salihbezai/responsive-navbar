import React,{useState} from 'react'
import './Navbar.css';
export const Navbar = () => {

const [ clicked , setClicked ] = useState(false)
const handleClick =()=>{
    setClicked(!clicked)
}
window.addEventListener('resize',()=>{
    const width = window.innerWidth;
   if(clicked && width > 716){
       setClicked(false)
   }
})
return (

                <nav className='nav'>
                  <h1 className='logo'>Logo!</h1>
                  <div className='menu-icon'>
                  <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
                  </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Offers</a></li>
                        <li><a href='#'>Policy</a></li>
                        <li><a href='#'>Contac-us</a></li>
                        <li><a href='#' className='nav-links-mobile'>signup</a></li>
                    </ul>
                    
                </nav>


    )
}
