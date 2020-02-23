import React from "react"
import "./styles.css"
import ProjetosSlick from "../projects-slick"

export default function Projetos() {
  return (
    <div className="container projetos">
      <h3>
        Como desenvolvedores de software nos esforçamos para entregar não
        somente código bem escrito, mas resultado de valor real para cada
        cliente.
      </h3>
      <ProjetosSlick />
    </div>
  )
}
