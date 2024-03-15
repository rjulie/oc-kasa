import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Slideshow({ pictures }) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  return (
    <div className="slideshow">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      {pictures.map((item, index) => (
        <div className={slide === index ? 'slide' : 'slide slide-hidden'}>
          <img src={item} alt={item} key={index} />
        </div>
      ))}
      <FontAwesomeIcon
        icon={faChevronRight}
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {slide + 1}/{pictures.length}
      </span>
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
}

export default Slideshow
