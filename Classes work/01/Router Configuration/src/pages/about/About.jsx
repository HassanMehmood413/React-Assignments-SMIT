import React from 'react'
import ServiceCard from '../../components/cards/ServiceCard'
import Logo from '../../components/logo/Logo'
import TestimonialsCard from '../../components/cards/TestimonialsCard'
import { services, clientLogos, testimonials } from '../../constants/about.constant'
import { useDispatch, useSelector } from 'react-redux'
import { addService, addTestiomonial, addClientLogo, removeService, removeTestiomonial, removeClientLogo } from '../../store/slices/about.slice'




export default function About() {
  const { testimonials, services, clientLogos } = useSelector((store) => store.aboutSlice);
  console.log(services)
  const dispatch = useDispatch()


  // For future use
  const handleAddService = (service) => {
    dispatch(addService(service))
  }
  const handleRemoveService = (service) => {
    dispatch(removeService(service))
  }
  const handleAddTestimonial = (testimonial) => {
    dispatch(addTestiomonial(testimonial))
  }
  const handleRemoveTestimonial = (testimonial) => {
    dispatch(removeTestiomonial(testimonial))
  }
  const handleAddClientLogo = (logo) => {
    dispatch(addClientLogo(logo))
  }
  const handleRemoveClientLogo = (logo) => {
    dispatch(removeClientLogo(logo))
  }


  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>


      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {
            services.map((service) => {
              console.log(service)
              return <ServiceCard key={service.id} image={service.image} title={service.title} description={service.description} />
            })
          }
        </ul>

      </section>




      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {
            testimonials.map((testimonial) => {
              return <TestimonialsCard key={testimonial.id} name={testimonial.name} avatar={testimonial.avatar} review={testimonial.review} />
            }
            )
          }


        </ul>

      </section>




      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {
            clientLogos.map((logo) => {
              return <Logo key={logo.id} logo={logo.logo} />
            }
            )
          }

        </ul>

      </section>

    </article>
  )
}