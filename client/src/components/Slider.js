import React from "react"
import friends from "../assets/friends.jpg"
import oldcouple from "../assets/oldcouple.jpg"
import sunset from "../assets/sunset.jpg"
import lonelyman from "../assets/lonelyman.jpg"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

export default props => {
  return (
    <div className="Slider-0">
      <AwesomeSlider>
        <div data-src={lonelyman} />
        <div data-src={friends} />
        <div data-src={sunset} />
        <div data-src={oldcouple} />
      </AwesomeSlider>
    </div>
  )
}
