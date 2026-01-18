import React from 'react'

const Loader = ({isLoading}) => {
  return (
   /* From Uiverse.io by abrahamcalsin */ 
    <div className={isLoading?`dot-spinner`:"hidden"}>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    <div className="dot-spinner__dot"></div>
    </div>
  )
}

export default Loader