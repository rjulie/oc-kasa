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
        className={
          pictures.length === 1
            ? 'arrow arrow-left arrow-hidden'
            : 'arrow arrow-left'
        }
        onClick={prevSlide}
      />
      {pictures.map((item, index) => (
        <div
          className={slide === index ? 'slide' : 'slide slide-hidden'}
          key={index}
        >
          <div
            className={
              slide === index
                ? 'slide center'
                : 'slide slide-hidden center center-hidden'
            }
          >
            <img src={item} alt={item} />
          </div>
        </div>
      ))}
      <FontAwesomeIcon
        icon={faChevronRight}
        className={
          pictures.length === 1
            ? 'arrow arrow-right arrow-hidden'
            : 'arrow arrow-right'
        }
        onClick={nextSlide}
      />
      <span
        className={
          pictures.length === 1 ? 'indicators indicators-hidden' : 'indicators'
        }
      >
        {slide + 1}/{pictures.length}
      </span>
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
}

export default Slideshow
