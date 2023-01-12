import React from 'react'
import { FaGithub } from 'react-icons/fa'

//https://www.reddit.com/r/vuejs/comments/y9xz5h/not_able_to_use_dynamic_images_in_the_vite_build/
//https://vitejs.dev/guide/features.html#glob-import
//Enables dynamic module imports, which I've defined to import everything from the asset folder
const modules = import.meta.glob("/src/assets/*", { eager: true });

const Projects = ({projects}) => {

  const styles = {
    default: 'py-5 min-h-[500px]',
    heading: 'max-[375px]:text-4xl flex text-5xl font-bold text-white my-5 after:block after:bg-primary-purple after:w-10 after:h-1 after:flex-1 gap-3 gap-x-3 items-center',
    projectsContainer: 'flex flex-col gap-40 gap-x-40 py-8 justify-center ',
    projectCard: 'relative  p-4 rounded-md flex items-start after:block after:bg-white/30 after:w-full after:h-[1px] after:absolute after:-bottom-20 after:left-0 bg-gradient-to-r from-primary-lighterBlue to-primary-purple gap-10 max-[768px]:flex-col max-[768px]:flex-col-reverse max-[768px]:gap-10 last:after:hidden',
    projectTitle: 'text-2xl font-bold text-gray-100 my-2',
    projectText: 'text-gray-200 ',
    projectTech:'flex gap-3 my-4 flex-wrap',
    techItem: 'px-2 py-1 bg-primary-purple/60  rounded text-xs text-gray-100' ,
    links: 'px-2 py-2  text-[#260166] rounded underline underline-offset-4 font-bold hover:bg-primary-blue/60 hover:text-white my-2',
    demoLink: 'text-[#ffffff]',
    image: 'w-[50%] max-[768px]:w-full relative max-[768px]:top-0 -top-10  shadow shadow-lg shadow-gray-600 rounded-xl max-w-none',
    projectInfo: '',
  
  }
  const projectElements = projects.map((item, i) => (
    <div key={i} className={styles.projectCard}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectTitle}>{item.title}</h3>
            <p className={styles.projectText}>{item.description}</p>
            <div className={styles.projectTech}>
              {item.tech.map((label, i) => (<span key={i} className={styles.techItem}>{label}</span>))}
            </div>
            <a target='_blank' href={item.githubLink} className={styles.links}>Github</a>
            <a target='_blank' href={item.demoLink} className={`${styles.links} ${styles.demoLink}`}>View Demo</a>
          </div>
          <img src={modules[`/src/assets/${item.image}`].default} alt="Project Card Image" className={styles.image}/>
        </div>
  ))
  return (
    <section id='projects' className={styles.default}>
      <h2 className={styles.heading}>Projects</h2>
      <section className={styles.projectsContainer}>
        {projectElements}
      </section>
    </section>
  )
}

export default Projects