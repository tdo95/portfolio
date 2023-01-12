import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer = ({ personalInfo }) => {
  const styles = {
    default: 'flex items-center p-4 text-white/80 text-sm border-t-[1px] border-white/80 max-[425px]:flex-col max-[425px]:justify-center max-[425px]:gap-3',
    socials: 'flex gap-4 gap-x-4  items-center ml-auto text-white text-lg max-[425px]:ml-0',
    github: 'hover:text-primary-lighterBlue',
    email: 'hover:text-primary-purple',
    linkedin: 'hover:text-blue-500',

  }
  return (
    <footer className={styles.default}> &copy; Designed and Built by Tee O.
      <section className={styles.socials}>
        <a target='_blank' href={personalInfo.links.linkedin} className={styles.linkedin}> <FaLinkedinIn/> </a>
        <a target='_blank' href={personalInfo.links.github} className={styles.github}> <FaGithub/> </a>
        <a target='_blank' href={personalInfo.links.email} className={styles.email}> <FaEnvelope/> </a>
      </section>
    </footer>
  )
}

export default Footer