import React, { useState } from 'react'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const FAQ = ({question,  answer}) => {
    const [isAnswerShowing, setAnswerShowing] = useState(false)
  return (
    <article className='faq'>
        <div>
        <h4 onClick={() => setAnswerShowing(prev => !prev)}>{question}</h4>
        <button className='faq__icon' onClick={() => setAnswerShowing(prev => !prev)}>
            {isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
        </div>
        <p>
            {isAnswerShowing && answer}
        </p>
    </article>
  )
}

export default FAQ