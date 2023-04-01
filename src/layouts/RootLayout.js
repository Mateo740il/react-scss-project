import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import logo from '../images/logo.png'

const RootLayout = () => {
  const today=new Date()
  return (
    <>
        <header className='header'>
            <img className='header__logo' src={logo} alt='logo'/>
            <nav className='header__nav'>
                <NavLink className='header__nav__link' to='/'>Home</NavLink>
                <NavLink className='header__nav__link' to='/about'>About</NavLink>
                <NavLink className='header__nav__link' to='/users'>Users</NavLink>
                <NavLink className='header__nav__link' to='/posts'>Post</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className='footer'>
          <p>Copyright &copy; {today.getFullYear()} Mateo Bukić</p>
        </footer>
    </>
  )
}

export default RootLayout