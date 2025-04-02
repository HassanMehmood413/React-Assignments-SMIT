import React from 'react'
import BlogCard from '../../components/cards/BlogCard'


export default function Blog() {
  const blogData = [
    {
      title: 'Design conferences in 2022',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: require('../../assets/images/blog-1.jpg')
    },
    {
      title: 'Best fonts every designer',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      image: require('../../assets/images/blog-2.jpg')
    },
    {
      title: 'Design digest #80',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
      image: require('../../assets/images/blog-3.jpg')
    },
    {
      title: 'UI interactions of the week',
      description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
      image: require('../../assets/images/blog-4.jpg')
    },
    {
      title: 'The forgotten art of spacing',
      description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../../assets/images/blog-5.jpg')
    },
    {
      title:'Design digest #79',
      description:'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
      image:require('../../assets/images/blog-6.jpg')
    }
  ]
  return (
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">

        <ul className="blog-posts-list">

          {
            [
              blogData.map((item,index)=>{
                return <BlogCard key={index} title={item.title} description={item.description} image={item.image} />
              })
            ]
          }


        </ul>

      </section>

    </article >




  )
}