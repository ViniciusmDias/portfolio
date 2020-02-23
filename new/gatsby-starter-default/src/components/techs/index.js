import React from "react"
import "./styles.css"
import Slider from "react-slick"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import { FaGithub, FaReact, } from "react-icons/fa"
import { DiHeroku } from "react-icons/di"

export default function Techs() {
  const settings = {
    accessibility: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  }

  return (
    <div className="container techs">
      <Tabs className="tab-title">
        <TabList className="tabs-title">
          <Tab>
            <h4>Ferramentas de Desenvolvimento</h4>
          </Tab>
          <Tab>
            <h4 className="disabled">Tecnologias de Desenvolvimento</h4>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="">
            <Slider {...settings}>
              <div className="tech">
                <div className="icon">
                  <FaGithub />
                </div>
                <h4>GitHub</h4>
                <p>
                  GitHub is a web-based Git repository hosting service. It
                  offers all of the distributed version control and source code
                  management (SCM) functionality of Git as well as its own
                  features.
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <DiHeroku />
                </div>
                <h4>Heroku</h4>
                <p>
                  Heroku is a cloud platform as a service supporting several
                  programming languages
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <FaReact />
                </div>
                <h4>React</h4>
                <p>
                  React is an open-source JavaScript library providing a view
                  for data rendered as HTML.
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <FaReact />
                </div>
                <h4>React</h4>
                <p>
                  React is an open-source JavaScript library providing a view
                  for data rendered as HTML.
                </p>
              </div>
            </Slider>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="">
            <Slider {...settings}>
              <div className="tech">
                <div className="icon">
                  <FaGithub />
                </div>
                <h4>GitHub</h4>
                <p>
                  GitHub is a web-based Git repository hosting service. It
                  offers all of the distributed version control and source code
                  management (SCM) functionality of Git as well as its own
                  features.
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <DiHeroku />
                </div>
                <h4>Heroku</h4>
                <p>
                  Heroku is a cloud platform as a service supporting several
                  programming languages
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <FaReact />
                </div>
                <h4>React</h4>
                <p>
                  React is an open-source JavaScript library providing a view
                  for data rendered as HTML.
                </p>
              </div>
              <div className="tech">
                <div className="icon">
                  <FaReact />
                </div>
                <h4>React</h4>
                <p>
                  React is an open-source JavaScript library providing a view
                  for data rendered as HTML.
                </p>
              </div>
            </Slider>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
