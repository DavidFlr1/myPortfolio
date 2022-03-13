import React, { useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { Flex, Box } from '../Grid'

import { BiChevronLeft, BiChevronRight, BiMinus } from 'react-icons/bi'


const StyledSlider = styled(Slider)`
  * {
    outline: none !important;
  }
`

const CustomNext = styled.div`
  display: block;
  position: absolute;
  top: 45%;
  left: 100%;
  cursor: pointer;
`
const CustomIconRight = styled(BiChevronRight)`
  font-size: 5rem;
  color: #d8e0e7;
  &:hover {
    color: #f9fafb;
  }
`

const CustomPrev = styled.div`
  display: block;
  position: absolute;
  top: 45%;
  right: 100%;
  cursor: pointer;
`

const CustomIconLeft = styled(BiChevronLeft)`
  font-size: 5rem;
  color: #d8e0e7;
  &:hover {
    color: #f9fafb;
  }
`

const SliderMultiple = ({ slides, shows, scrolls, dots, arrows, children}) => {
  const [hideArrows, setHideArrows] = useState(arrows)
  const slides = [
    {
      icon: null,
      title: 'Attract',
      description:
        'Maximize your recruitment results with answers to improve time-to-fill, quality of hire, candidate diversity, and recruiter capacity.',
    },
    {
      icon: null,
      title: 'Develop',
      description:
        'Make data-driven decisions on training programs, leadership development, skills and reskilling–all with an eye on business impact.',
    },
  ]

  const NextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <CustomNext className="slick-arrow" onClick={onClick}>
        <CustomIconRight />
      </CustomNext>
    )
  }

  const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <CustomPrev className="slick-arrow" onClick={onClick}>
        <CustomIconLeft />
      </CustomPrev>
    )
  }

  const settings = {
    dots: !hideArrows && dots,
    infinite: true,
    speed: 500,
    slidesToShow: shows,
    slidesToScroll: scrolls,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: shows,
          slidesToScroll: scrolls,
          onReInit: () => setHideArrows(true),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: shows,
          slidesToScroll: scrolls,
          onReInit: () => setHideArrows(true),
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: shows,
          slidesToScroll: scrolls,
          onReInit: () => setHideArrows(false),
        },
      },
    ],
  }
  return (
    <div className="use-slider">
      <StyledSlider {...settings} arrows={hideArrows}>
        {slides.map((e, i) => (
          <Box width={['100%', null, null, 1 / 3, '36.5rem']} mb={[4, null, null, 0]}>
            hola
          </Box>
        ))}
      </StyledSlider>
    </div>
  )
}

export default SliderMultiple
