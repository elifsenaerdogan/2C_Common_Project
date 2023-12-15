import { useRef, useState } from 'react'
import { Carousel as AntdCarousel } from 'antd'
import { CarouselProps, CarouselRef } from 'antd/lib/carousel'
import styles from './carousel.module.scss'
import { CarouselImagesType } from '@others/interfaces'

export interface PropTypes extends CarouselProps {
  images: CarouselImagesType[]
  onSlideChange?: (slideIndex: number) => void
  wrapperClassName?: string
}
const Carousel = (props: PropTypes) => {
  const { images, onSlideChange, wrapperClassName } = props
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const ref = useRef<CarouselRef>(null)
  if (!images) return <></>

  const goTo = (slide: number) => {
    ref?.current?.goTo(slide, false)
    setCurrentSlide(slide)
    if (onSlideChange) {
      onSlideChange(slide)
    }
  }

  return (
    <div className={`${styles.trkclAppCarousel} ${wrapperClassName}`}>
      <AntdCarousel ref={ref} dots={false} {...props}>
        {images?.map((image) => (
          <div key={image.id}>
            <img src={image.src} width={248} height={186} className={styles.trkclAppCarouselContent} alt={image.alt} />
          </div>
        ))}
      </AntdCarousel>
      {images ? (
        <div className={styles.trkclAppCarouselSlider}>
          {images?.map((image, index) => (
            <button key={image.id} onClick={() => goTo(index)} className={currentSlide === index ? styles.trkclAppCarouselSelectedDot : styles.trkclAppCarouselDot} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Carousel
