import React from 'react'
import './faq.scss'

/**
* @author
* @function FAQ
**/

import { AccordionData } from './data'
import FaqItem from './FaqItem'

export const FAQ = (props) => {
  return(
    <div className='faq'>
        {AccordionData.map((props) => {
            return (
                <FaqItem question={props.question} answer={props.answer} />
            )
        })}

    </div>
   )

 }

 export default FAQ;