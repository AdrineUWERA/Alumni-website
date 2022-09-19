import React,{useState} from 'react'
import { GalleryData } from './GalleryData'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import GallerySliderStyles from './GallerySlider.scss'

const GallerySlider = ({slides}) => {

  const [current,setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className = "slider relative">
      <h1 className="gallery-title text-blue-800 font-bold text-center">GALLERY</h1>
      <div className='slide-nav'>
        <div className='buttons'>
          <FaAngleLeft className="prev " onClick={prevSlide} />
          <FaAngleRight className="next " onClick={nextSlide}/>
        </div>
      </div>
        { GalleryData.map((slide,index)=>{
            return (
                <div
                  className={index === current ? 'slide active' : 'slide'} 
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image w-1000 h-1000 object-cover shadow-lg rounded-lg ' />
                  )}
                </div>
              );
        })

        }
    </section>
  )
}

export default GallerySlider