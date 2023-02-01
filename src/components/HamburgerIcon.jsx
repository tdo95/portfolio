import React from 'react'


const HamburgerIcon = ({open, toggleNav}) => {
  
    const styles = {
        default: 'flex flex-col justify-around ml-auto mr-2 h-5 z-10 md:hidden cursor-pointer ',
        backgroundColor: `${open ? 'bg-white ' : 'bg-primary-purple '}`,
        lineStyle: 'w-[20px] h-0.5 origin-[.1px] transition-all duration-300',
        firstLine: `${open ? 'rotate-45 ' : 'rotate-0 '}`,
        secondLine: `${open ? 'translate-x-full opacity-0 ' : 'translate-x-0 opacity-100 '}`,
        thirdLine: `${open ? '-rotate-45 ' : 'rotate-0 '}`,
    }
  return (
    <div 
      className={`
        ${styles.default} 
      `}
      onClick={toggleNav}
    >
        <div className={`
          ${styles.lineStyle} 
          ${styles.backgroundColor} 
          ${styles.firstLine}
        
        `}></div>
        <div className={`
          ${styles.lineStyle} 
          ${styles.backgroundColor} 
          ${styles.secondLine} 
        
        `}></div>
        <div className={`
          ${styles.lineStyle} 
          ${styles.backgroundColor} 
          ${styles.thirdLine} 
        
        `}></div>
    </div>
  )
}

export default HamburgerIcon