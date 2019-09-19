import React from 'react'
import './current-date.css'

const CurrentDate = () => {

  const date = new Date();

  const dayName = () => {
    switch (date.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Oups, time is a construct.";
    }
  }

  return (
    <div className="date__container">
      <h3>{dayName()}</h3>
      <h4>{date.getDay()}.{date.getMonth()}.{date.getFullYear()}</h4>
    </div>
  )
}

export default CurrentDate