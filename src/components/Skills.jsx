import React from 'react'

const Skills = ({skills }) => {
  const styles = {
    default: 'py-5 min-h-[500px]',
    heading: ' max-[375px]:text-4xl flex text-5xl font-bold text-white my-5 after:block after:bg-primary-purple after:w-10 after:h-1 after:flex-1 gap-3 gap-x-3 items-center',
    skillsContainer: 'flex flex-col gap-10 gap-x-10 py-6 mb-10',
    skillsCategory: 'flex items-center gap-5 gap-x-5  max-[375px]:flex-col',
    skillsHeading: 'gap-3 gap-x-3 min-w-[125px] max-w-[125px] text-center text-lg font-extrabold text-gray-200',
    divider: 'block w-px bg-gray-300 self-stretch min-h-[75px] max-[375px]:w-full max-[375px]:min-h-[1px]',
    skillsList: 'flex gap-2 gap-x-2 flex-wrap max-[375px]:justify-center items-center',
    skillItem: 'py-1 px-2  rounded bg-white text-primary-blue  text-center'

  }
  const skillsElements = skills.map((item, i) => (
    <div key={i} className={styles.skillsCategory}>
          <h3 className={styles.skillsHeading}>{item.categoryName}</h3>
          <div className={styles.divider}></div>
          <ul className={styles.skillsList}>
            {item.values.map( (name, i) => (<li key={i} className={styles.skillItem}>{name}</li>))}
          </ul>
        </div>
  ))
  return (
    <section id='skills' className={styles.default}>
      <h2 className={styles.heading}>Skills</h2>
      <section className={styles.skillsContainer}>
        {skillsElements}
      </section>
    </section>
  )
}

export default Skills