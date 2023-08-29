import React, { Component } from "react";
import './PageInicio.css';
const image = require.context('../images',true);




class Menu extends Component{




    render(){

     
        return(

          

          <body data-home-page="https://website5392013.nicepage.io/Page-2.html?version=a4b6c70b-1531-4be9-b3e9-4c3417efe825" data-home-page-title="Page 2" class="u-body u-xl-mode" data-lang="es"> 
    
          <section class="u-clearfix u-image u-shading u-section-1" id="sec-9bd1">
            <div class="u-clearfix u-sheet u-sheet-1">
             <img src={image('./b830c9ee53b7d3c27cb8fdb1d86e96bc.png')} 
                alt={image}
                class="u-image u-image-default u-image-1" 
                data-image-width="77" 
                data-image-height="94"/>
            <div class="u-align-right u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
            <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-1">
                <h1 class="u-custom-font u-font-oswald u-text u-text-body-alt-color u-title u-text-1">AXÉ ABOGADOS</h1>
                <h3 class="u-text u-text-2">Asesorando empresas y personas de éxito</h3>
            </div>
            </div>
            </div>
          </section>

          <section class="u-clearfix u-white u-section-2" id="sec-be49">
            <div class="u-clearfix u-sheet u-sheet-1">
              <div class="u-clearfix u-expanded-width u-gutter-20 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
                <div class="u-layout">
                  <div class="u-layout-row">
                    <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-1">
                      <div class="u-container-layout" src="">
                        <img src={image('./43962fdc27fbb9a51adab51bb532edbe.jpeg')} 
                        alt={image}
                        class="u-expanded-width u-image u-image-1"/>
                      </div>
                    </div>
                      <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-2">
                        <div class="u-container-layout u-valign-middle u-container-layout-2">
                            <h3 class="u-custom-font u-font-oswald u-text u-text-1">¿Quiénes Somos?</h3>
                            <p class="u-text u-text-2" >En Axeabogados somos abogados especializados en derecho Laboral y Comercial, con amplia experiencia en propiedad intelectual e industrial.®️©️🇨🇴.

                            Queremos garantizar a nuestros clientes, en su máxima expresión la prevención de controversias jurídicas en sus negociaciones comerciales, así como también ser sus aliados estratégicos para el crecimiento firme de sus empresas y ayudarlos a la protección integral de los activos fijos tangibles e intangibles. 
                           
                    
                       
                            
                            </p>
                        </div>
              
                      </div>
                    </div>
                </div>
            </div>
          </div>
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




export default Menu