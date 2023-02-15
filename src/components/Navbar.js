import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
// import './Navbar.cs
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        
      <IconContext.Provider value={{ color: '/fff' }}>
        <div className='navbar  navbar-expand-lg navbar-dark bg-dark'>
          
          
          <Link to='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link className="navbar-brand mx-4"  to="/">Bodymakers</Link>
          <form className="d-flex">
          
        <input className="form-control me-2 " style={{marginLeft:'150px',width:'50vw'}} type="search" placeholder="Search" aria-label="Search"/>
       
        <button class="btn btn-outline-success" type="submit"> <i class="fas fa-search"></i></button>
     
      </form>
        </div>
       
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='/' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              
            </li>
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
   
        </nav>
       
      </IconContext.Provider>
    </>
  );
}

export default Navbar;