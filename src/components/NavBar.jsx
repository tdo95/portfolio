import React from 'react'
import HamburgerIcon from './HamburgerIcon'
import LinksMenu from './LinksMenu'
import { useState } from 'react'
// import logo from '../assets/logo.png'

const NavBar = ({scroll}) => {
  const [open, setOpen] = useState(false)
  function toggleNav() {
    setOpen(!open)
  }
  const styles = {
    default: 'flex p-4 h-20 items-center transition-all duration-300 text-white',
    scrollStyle: `${scroll > 10 ? 'shadow-md shadow-black' : ''}`,
    logoImage: 'h-full p-2',
    logoDescription: 'font-medium text-xl ml-2',
  }

  return (
    <header className={`${styles.default} ${styles.scrollStyle}`}>
        <img className={styles.logoImage} src="/site-logo.png" alt="Tee O. Logo" />
        <span className={styles.logoDescription}>Tee O.</span>
        <LinksMenu isMobile={false} open={open} />

        {/* Mobile Nav */}
        <HamburgerIcon open={open} toggleNav={toggleNav}/>
        <LinksMenu isMobile={true} open={open} toggleNav={toggleNav}/>
    </header>
  )
}

export default NavBar