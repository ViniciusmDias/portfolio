import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./styles.css"

//import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function ProjetosSlick() {
  var settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //prevArrow: <FaChevronLeft />,
    //nextArrow: <FaChevronRight />,
  }

  return (
    <div className="">
      <Slider {...settings}>
        <div className="carousel-item">
          <img
            className="image-item"
            src="https://codeminer42-prod.s3.sa-east-1.amazonaws.com/jsebd84fymri4gtx59ei1wj1ocmi?response-content-disposition=inline%3B%20filename%3D%22image.png%22%3B%20filename%2A%3DUTF-8%27%27image.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQPSMLHWB7527XAOB%2F20200217%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200217T163439Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b5c952e7ffd43b1d0ce4248ca2333f197dd3b0126af1de6dd072fb881ded8cc1"
          ></img>
          <div className="info-item">
            <h4>DEVPIZZA.COM.BR</h4>
            <p>
              iOS and Android apps built with React Native for players to check
              out the Brazilian LoL Championship. It's been installed hundreds
              of thousands of times already.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="image-item"
            src="https://codeminer42-prod.s3.sa-east-1.amazonaws.com/jsebd84fymri4gtx59ei1wj1ocmi?response-content-disposition=inline%3B%20filename%3D%22image.png%22%3B%20filename%2A%3DUTF-8%27%27image.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQPSMLHWB7527XAOB%2F20200217%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200217T163439Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b5c952e7ffd43b1d0ce4248ca2333f197dd3b0126af1de6dd072fb881ded8cc1"
          ></img>
          <div className="info-item">
            <h4>SATTORUSUSHI.COM.BR</h4>
            <p>
              iOS and Android apps built with React Native for players to check
              out the Brazilian LoL Championship. It's been installed hundreds
              of thousands of times already.
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            className="image-item"
            src="https://codeminer42-prod.s3.sa-east-1.amazonaws.com/jsebd84fymri4gtx59ei1wj1ocmi?response-content-disposition=inline%3B%20filename%3D%22image.png%22%3B%20filename%2A%3DUTF-8%27%27image.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQPSMLHWB7527XAOB%2F20200217%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200217T163439Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b5c952e7ffd43b1d0ce4248ca2333f197dd3b0126af1de6dd072fb881ded8cc1"
          ></img>
          <div className="info-item">
            <h4>CARPRIX.COM.BR</h4>
            <p>
              iOS and Android apps built with React Native for players to check
              out the Brazilian LoL Championship. It's been installed hundreds
              of thousands of times already.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}
