import React from 'react'
import "./styles.css"

export default function Intro ({title}) {
        return (
                <>
                        <div className="container intro">
                                <h1><span>Somos a DevPizza</span><br></br>A sua  empresa de desenvolvimento<br></br> de software em Florianópolis.
                                </h1>
                                <h2>Desenvolvemos a sua <span>ideia.</span></h2>
                        </div>
                </>
        )
} 
