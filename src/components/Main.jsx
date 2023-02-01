import React from 'react'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import Aricles from './Articles'
import Footer from './Footer'
import { useEffect } from 'react'
import Articles from './Articles'
import { portfolio } from '../portfolioData'

const Main = ({setScroll}) => {
    useEffect(() => {
        // This useEffect creates a dropdown shadow on the nav bar when the main container is scrolled
        function watchScroll() {console.log(window.scrollY); setScroll(window.scrollY)}
        
        window.addEventListener('scroll', watchScroll )

        return function () {
            window.removeEventListener('scroll', watchScroll)
        }
    }, [])

    const styles = {
      sectionLayout: 'flex-1 px-10 mt-20'
    }
  return (
    <section className={styles.sectionLayout}>
        <Landing personalInfo={portfolio.personal} />
        <Articles articles={portfolio.articles} />
        <Projects projects={portfolio.projects} />
        <Skills skills={portfolio.skills} />
        <Footer personalInfo={portfolio.personal} /> 
    </section>
  )
}

export default Main