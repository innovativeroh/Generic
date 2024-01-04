'use client'
import React from "react";
import Flickity from "react-flickity-component";
import styles from "@/app/components/engine/slider.module.css";

const flickityOptions = {
    initialIndex: 2
}

const Slider = () => {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
      >
    <div className={styles.sliderPlate}>Hello World</div>
    <div className={styles.sliderPlate}>Hello World</div>
    <div className={styles.sliderPlate}>Hello World</div>
    </Flickity>
  )
}
export default Slider