import React from 'react'
import PortfolioCard from '../../components/cards/PortfolioCard'

export default function Services() {

  const projectsData = [
    { title: 'Finance', description: 'Web development', image: require('../../assets/images/project-1.jpg') },
    { title: 'Orizon', description: 'Web development', image: require('../../assets/images/project-2.png') },
    { title: 'Fundo', description: 'Web design', image: require('../../assets/images/project-3.jpg') },
    { title: 'Brawlhalla', description: 'Applications', image: require('../../assets/images/project-4.png') },
    { title: 'DSM.', description: 'Web design', image: require('../../assets/images/project-5.png') },
    { title: 'MetaSpark', description: 'Web design', image: require('../../assets/images/project-6.png') },
    { title: 'Summary', description: 'Web development', image: require('../../assets/images/project-7.png') },
    { title: 'Task Manager', description: 'Applications', image: require('../../assets/images/project-8.jpg') },
    { title: 'Arrival', description: 'Web development', image: require('../../assets/images/project-9.png') }
  ]

  return (
    <article className="portfolio active" data-page="portfolio">

      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">

        <ul className="filter-list">

          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>

        </ul>

        <div className="filter-select-box">

          <button className="filter-select" data-select>

            <div className="select-value" data-selecct-value>Select category</div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>

          </button>

          <ul className="select-list">

            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>

          </ul>

        </div>

        <ul className="project-list">
          {
            [
              projectsData.map((item, index) => {
                return <PortfolioCard key={index} description={item.description} title={item.title} image={item.image} />
              })
            ]
          }
        </ul>

      </section>

    </article>

  )
}
