import React from 'react'
import './clock.css'

const Clock = () => {

  function setDate () {

    const hourHand = document.querySelector(".hand__hours");
    const minuteHand = document.querySelector(".hand__minutes");
    const secondHand = document.querySelector(".hand__seconds");

    let date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = seconds / 60 * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = date.getMinutes();
    const minutesDegrees = minutes / 60 * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = date.getHours();
    const hoursDegrees = hours / 12 * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  return (
    <div className="clock">
      <div className="hand hand__hours" />
      <div className="hand hand__minutes" />
      <div className="hand hand__seconds" />
      <div className="clock__center" />
    </div>
  )
}

export default Clock