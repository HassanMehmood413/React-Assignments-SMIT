import React from 'react'
import BlogCard from '../../components/cards/BlogCard'
import { useDispatch,useSelector } from 'react-redux'
import { addblog,removeblog } from '../../store/slices/blog.slice'
import { blogData } from '../../constants/blog.constant'


export default function Blog() {
  const dispatch = useDispatch()
  const blog = useSelector((store)=>store.blogSlice.blog)
  console.log(blog)

  const handleAddblog = (blog) => {
    dispatch(addblog(blog))
  }
  const handleRemoveblog = (blog) => {
    dispatch(removeblog(blog))
  }


  

  return (
    <article className="blog active" data-page="blog">

      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">

        <ul className="blog-posts-list">

          {
            [
              blogData.map((blog)=>{
                console.log(blog)
                return <BlogCard key={blog.id} title={blog.title} description={blog.description} image={blog.image} />
              })
            ]
          }


        </ul>

      </section>

    </article >




  )
}