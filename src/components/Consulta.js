import React, { Component } from "react"
import './Consulta.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Itemcard from "./Itemcard";
import data from "./Planes";



class Consulta extends Component{
    render(){
        return(
            <body className="u-body u-xl-mode" data-lang="es"> 
            <section className="u-clearfix u-palette-4-dark-2 u-section-3" id="sec-2fd2">
            <div class="u-align-center u-container-style u-group u-group-1">
                <div class="u-container-layout u-valign-middle u-container-layout-1">
                  <h1 class="u-custom-font u-font-oswald u-text-body-alt-color u-text-1">NUESTROS PLANES</h1>
                </div>
              </div>

            <section className="py-4 container">         
            <div className = "row justify-content-center">
                {data.productData.map((item, index)=>{
                    return(<Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>)
                })}
                
            </div>
            </section>

            </section>
         

            <div className= "u-backlink  u-grey-80">
                <span>Powered by </span>
                <a className="u-link" href="https://www.linkedin.com/in/devinsonma94/" target="_blank" rel="noopener noreferrer">
                <span> aldemar.online ©</span>
                  </a>
                  <span> To Axeabogados &amp; Copyright 2023. Todos los derechos reservados</span>
                </div>
            </body>
        )
    }
}


export default Consulta