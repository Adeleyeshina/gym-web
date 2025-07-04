import React from 'react'
import { useState } from 'react';
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im';
import Card from '../UI/Card';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from '../data';
const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimonailHandler = () => {
        setIndex(prev => prev - 1)

        if(index <= 0){
            setIndex(testimonials.length-1)
        }
    }


    const nextTestimonailHandler = () => {
        setIndex(prev => prev + 1)

        if(index >= testimonials.length-1){
            setIndex(0)
        }
    }






  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title ='Testimonials' className='testimonials__head'/>
            <Card className='testimonial'>
                <div className="testimonail__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonial__btn-container">
                <button className="testimonial__btn" onClick={prevTestimonailHandler}><IoIosArrowDropleftCircle/></button>
                <button className="testimonial__btn" onClick={nextTestimonailHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial