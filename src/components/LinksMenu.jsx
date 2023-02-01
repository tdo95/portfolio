import React from 'react'

const LinksMenu = ({open, isMobile, toggleNav}) => {
  const styles = {
    default: 'flex',
    mobile: 'flex-col self-start gap-6 gap-x-6 bg-primary-purple fixed top-0 right-0 w-64 h-full m-0 p-6 transition-all duration-300 ',
    regular: 'ml-auto mr-2 gap-4 gap-x-4 max-[767px]:hidden',
    sidebarTransition: `${open ? 'translate-x-0' : 'translate-x-full'}`
  }
  function closeMobileNav() {
    if (isMobile) toggleNav();
  }
  return (
    <nav 
        className={`
            ${styles.default} 
            ${isMobile ? styles.mobile : styles.regular}
            ${isMobile ? styles.sidebarTransition : ""}
        `}
    >
            <a className={`link`} onClick={closeMobileNav} href="#home">Home</a>
            <a className={`link`} onClick={closeMobileNav} href="#articles">Articles</a>
            <a className={`link`} onClick={closeMobileNav} href="#projects">Projects</a>
            <a className={`link`} onClick={closeMobileNav} href="#skills">Skills</a>
    </nav>
  )
}

export default LinksMenu