import { Carousel } from "flowbite-react"
import {dataSlider} from "../dataSlider"

const Slider = () => {
  return (
    <>
     <div className="h-80 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
  {dataSlider.map(({imagen},i) =>(
    <img
    key={i}
    src={imagen}
    alt="..."
  />
  )
  )}
    
  </Carousel>
</div> 
    </>
  )
}

export default Slider
