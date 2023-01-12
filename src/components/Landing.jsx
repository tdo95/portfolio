import React from 'react'
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"

const Landing = ({ personalInfo }) => {

  const styles = {
    sectionLayout: 'min-h-[90vh] flex items-center',
    title: 'max-[375px]:text-5xl text-7xl font-bold py-4 text-slate-50',
    greeting: 'text-xl  uppercase tracking-[.15em] text-primary-purple',
    description: 'text-2xl max-[375px]:text-xl',
    subDescription:'text-lg max-[375px]:text-base py-2 text-gray-400',
    descriptionLink: 'hover:text-white text-primary-purple hover:underline hover:underline-offset-4',
    descriptionHighlight: '',
    socials: 'pt-8 flex flex-wrap gap-4 gap-x-4',
    socialsIcon: 'px-3 py-1 rounded bg-white flex items-center gap-2 gap-x-2 max-[379px]:py-2 max-[379px]:text-xl hover:text-white',
    github: ' text-primary-blue shadow-md shadow-primary-lighterBlue hover:bg-primary-lighterBlue',
    linkedin: 'text-blue-500 shadow-md shadow-blue-500 hover:bg-blue-500',
    email: 'text-primary-purple shadow-md shadow-primary-purple hover:bg-primary-purple',
    hideIconTextMobile: 'max-[379px]:hidden',
    strongText: '',
  }
  return (
    <section id='home' className={styles.sectionLayout}>
      <section>
      <span className={styles.greeting}>Hi There</span>
      <h1 className={styles.title}>Im Tee O.</h1>
      <p className={styles.description}>
        A quality-focused <strong>software engineer</strong> who enjoys learning and building great products
      </p>
      <p className={styles.subDescription}>
        2+ years expereince developing <a className={styles.descriptionLink} href='#projects'>full stack applications</a> and web services, and contributing to <a href="" className={styles.descriptionLink}>open source</a>.
      </p>
      <section className={styles.socials}>
        <a className={`${styles.socialsIcon} ${styles.linkedin}`}href={personalInfo.links.linkedin}>
          <FaLinkedinIn /> 
          <span className={styles.hideIconTextMobile}> Linkedin </span>   
        </a>
        <a className={`${styles.socialsIcon} ${styles.github}`}href={personalInfo.links.github}>
          <FaGithub /> 
          <span className={styles.hideIconTextMobile}> Github </span>
        </a>
        <a className={`${styles.socialsIcon} ${styles.email}`}href={personalInfo.links.email}> 
          <FaEnvelope /> 
        <span className={styles.hideIconTextMobile}> Email </span>
        </a>
      </section>
      </section>
    </section>
  )
}

export default Landing