import React, { Component } from "react"
import './Casos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const image = require.context('../images',true);


class Casos extends Component{
    render(){
        return(
            
          <body data-home-page="https://website5392013.nicepage.io/Page-2.html?version=a4b6c70b-1531-4be9-b3e9-4c3417efe825" data-home-page-title="Page 2" class="u-body u-xl-mode" data-lang="es"> 
            <section class="u-clearfix u-palette-5-light-3 u-section-7" id="sec-7ee3">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-align-center-md u-align-center-sm u-align-center-xl u-align-center-xs u-align-left-lg u-container-style u-group u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h2 class="u-align-center-lg u-custom-font u-font-oswald  u-text-1">Marcas registradas por nosotros</h2>
            <p class="u-align-center-lg u-text-2">Conoce nuestros aliados, nos dieron la confianza y juntos completamos el objetivo.</p>
          </div>
        </div>
        <div class="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
                <div class="u-container-layout u-valign-top">
                <img src={image('./ae6ddae7c5427d8429342c2925075c48.jpeg')} 
                alt={image}
                class="u-expanded-width u-image u-image-1"/>
                  <h5 class="u-align-center u-text u-text-3">NATURLU</h5>
                  <p class="u-align-center u-text u-text-4">Productos de belleza Naturlú</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-2">
                <div class="u-container-layout u-valign-top">
                <img src={image('./ed586d476297fc64da6627df84e0730c.jpeg')} 
                alt={image}
                class="u-expanded-width u-image u-image-2"/>
                  <h5 class="u-align-center u-text u-text-5">LABORATORIO VETERINARIO DEL VALLE</h5>
                  <p class="u-align-center u-text u-text-6">Laboratorio para mascotas</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
                <div class="u-container-layout u-valign-top">
                <img src={image('./5a47ad9b468e862145140a48966a510e.jpeg')} 
                alt={image}
                class="u-expanded-width u-image u-image-3"/>
                  <h5 class="u-align-center u-text u-text-7">INTEGRA2</h5>
                  <p class="u-align-center u-text u-text-8">Productos alimenticios naturales</p>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-right-cell u-size-15 u-size-30-md u-layout-cell-4">
                <div class="u-container-layout u-valign-top">
                <img src={image('./29861bdca0a74ce3cfe5cc1bff37c8cc.jpeg')} 
                alt={image}
                class="u-expanded-width u-image u-image-4"/>
                  <h5 class="u-align-center u-text u-text-9">AXÉ ABOGADOS</h5>
                  <p class="u-align-center u-text u-text-10">Asesorando empresas y personas de éxito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="u-backlink  u-grey-80">
          <a class="u-link" href="https://www.linkedin.com/in/devinsonma94/" target="_blank">
          <span>Powered by aldemar.online</span>
          </a>       
        </section>
    
    </body>
        )
    }
}


export default Casos