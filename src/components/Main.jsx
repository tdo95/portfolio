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
        const main = document.querySelector('.main-section')

        function watchScroll() { setScroll(main.scrollTop);}
        
        main.addEventListener('scroll', watchScroll )

        return function () {
            main.removeEventListener('scroll', watchScroll)
        }
    }, [])

    const styles = {
      sectionLayout: 'main-section scroll-smooth overflow-y-scroll flex-1 px-10'
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