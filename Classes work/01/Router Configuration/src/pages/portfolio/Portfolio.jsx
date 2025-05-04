import React from 'react'
import PortfolioCard from '../../components/cards/PortfolioCard'
import { useSelector, useDispatch } from 'react-redux'
import { projectsData } from '../../constants/portfolio.constant'

export default function Services() {
  const portfoliodata = useSelector((store)=>store.portfolioslice.portfolio)

  
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
              projectsData.map((portfolio) => {
                return <PortfolioCard key={portfolio.id} description={portfolio.description} title={portfolio.title} image={portfolio.image} />
              })
            ]
          }
        </ul>

      </section>

    </article>

  )
}
