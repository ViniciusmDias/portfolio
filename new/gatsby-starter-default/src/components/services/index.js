import React from 'react'
import './styles.css'
import { IoIosPeople } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { MdDevices } from 'react-icons/md';


export default function Services() {

    return (
        <div className="container services">
            <h3>
                Soluções digitais com a perspicácia que você precisa<br></br>
                <span>Unimos conceitos de design e inovação digital para criar plataformas web e mobile fáceis de usar e que trazem resultados.</span> 
            </h3>
            <div className="services-section">
                <div className="service">
                    <div className="icon"><IoIosPeople/></div>
                    <div className="service-about">
                        <h4>Consultoria</h4>
                        <p>Alocamos um time de designers para solucionar fluxos, problemas de negócio e validar soluções de maneira extremamente ágil.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="icon"><FaTools/></div>
                    <div className="service-about">
                        <h4>Assistência Técnica</h4>
                        <p>Criamos sites, sistemas e aplicativos assertivos e que satisfazem ao mesmo tempo as necessidades do negócio, da tecnologia e das pessoas que vão usar.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="icon"><MdDevices/></div>
                    <div className="service-about">
                        <h4>Sites, Sistemas e Apps</h4>
                        <p>Com a cultura de desenvolvimento ágil de software, trabalhamos com entregas de funcionalidades em ciclos curtos, eficientes e de colaboração constante.</p>
                    </div>
                </div>
            </div>
            <button>Fale sobre o seu projeto</button>
        </div>
    )
}