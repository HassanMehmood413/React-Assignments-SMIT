import React from 'react'
import ResumeSection from '../../components/resume-section/ResumeSection'
import Experience from '../../components/resume-section/Experience'
import { useSelector, useDispatch } from 'react-redux'
import { loadmoredata } from '../../store/slices/resume.slice.js'

export default function Resume() {

  const dispatch = useDispatch()
  const EducationData = useSelector((store) => store.resumeslice.EducationData)
  const experienceData = useSelector((store) => store.resumeslice.ExperienceData)


  const newExperience = [
    {
      title: "Freelance Developer",
      description: "Built custom web apps for local businesses.",
      year: "2024 - Present",
    },
    {
      title: "AI Internship",
      description: "Worked on ML pipelines and frontend dashboards.",
      year: "2023",
    },
  ];


  const handleloadmore = () => {
    dispatch(loadmoredata({ section: "experience", data: newExperience }))
  }

  return (
    <article className="resume active" data-page="resume" >

      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">

          {
            [
              EducationData.map((item, index) => {
                return <ResumeSection title={item.title} description={item.description} year={item.year} />
              })
            ]
          }

        </ol>

      </section>

      <button style={{ marginTop: "20px" }} onClick={handleloadmore}>Load more</button>
      <section className="timeline">

        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {
            [

              experienceData.map((item, index) => {
                return <Experience title={item.title} description={item.description} year={item.year} />
              })

            ]
          }
        </ol>

      </section>



      <section className="skill">

        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value="80">80%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }}></div>
            </div>

          </li>

          <li className="skills-item">

            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>

          </li>

        </ul>

      </section>

    </article>
  )
}