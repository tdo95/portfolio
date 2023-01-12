import React from 'react'

const Articles = ({ articles }) => {
  const styles = {
    default: 'py-5 min-h-[500px]',
    heading: 'max-[375px]:text-4xl flex text-5xl font-bold text-white my-5 after:block after:bg-primary-purple after:w-10 after:h-1 after:flex-1 gap-3 gap-x-3 items-center',
    articleContainer: 'flex flex-wrap py-8 gap-6 items-stretch',
    card: 'flex flex-col rounded-lg border-white border-2 w-80 p-4 hover:bg-white [&:hover>*]:text-primary-blue h-full',
    cardTitle: 'text-xl font-bold text-gray-100 my-2',
    cardDescription: '',
    cardType: 'px-2 py-1 bg-primary-purple/30  rounded text-sm my-4 text-gray-100 w-fit',
    cardImage: 'shadow shadow-md shadow-black',
  }
  const articlesElements = articles.map((item, i) => (
    <a key={i} href={item.link}><div className={styles.card}>      
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDescription}>{item.description}</p>
          <span className={styles.cardType}>{item.type}</span>
        </div></a>
  ))
  return (
    <section id='articles' className={styles.default}>
      <h2 className={styles.heading}>Articles</h2>
      <section className={styles.articleContainer}>
        {articlesElements}
      </section>
    </section>
  )
}

export default Articles