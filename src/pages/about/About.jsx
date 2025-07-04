import React from 'react'
import './about.css'
import HeaderImage from "../../images/header_bg_1.jpg"
import Header from '../../components/Header'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'



const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum
        debitis consequatur molestias?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt='Our Story Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod
              in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis 
              delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis
              consectetur veritatis veniam, ratione, distinctio iste dignissioms alias ipsum minima consequuntur?
            </p>
            <p>
              perferndis consectetur veritatis veniam, ratione, distinctio iste dignissimos alia ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>


      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod
              in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis 
              delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis
              consectetur veritatis veniam, ratione, distinctio iste dignissioms alias ipsum minima consequuntur?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt='Our Vision Image' />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt='Our Mission Image' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit adneque quo, quas eius quam at sunt quod
              in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis 
              delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis
              consectetur veritatis veniam, ratione, distinctio iste dignissioms alias ipsum minima consequuntur?
            </p>
            <p>
              perferndis consectetur veritatis veniam, ratione, distinctio iste dignissimos alia ipsum minima consequuntur?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About