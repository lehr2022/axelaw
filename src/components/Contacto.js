import React, { Component } from "react"
import './Contacto.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const image = require.context('../images',true);




class Contacto extends Component{
    render(){

      
        return(

            <body data-home-page="https://website5392013.nicepage.io/Page-2.html?version=a4b6c70b-1531-4be9-b3e9-4c3417efe825" data-home-page-title="Page 2" class="u-body u-xl-mode" data-lang="es"> 
            <section class="u-clearfix u-image u-shading u-section-9" id="sec-f7ba">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  
                <img src={image('./b830c9ee53b7d3c27cb8fdb1d86e96bc.png')} 
                alt={image}
                class="u-image u-image-default u-image-1"
                data-image-width="77" 
                data-image-height="94"/>

               
                  <div class="u-form u-form-1">
                  <form action="https://forms.nicepagesrv.com/v2/form/process" class="u-block-faa4-8 u-clearfix u-form-spacing-15 u-form-vertical u-inner-form" source="email">
                      <div class="u-form-group u-form-name">
                        <label for="name-1cd4" class="u-form-control-hidden u-label">Nombre</label>
                        <input type="text" placeholder="Ingresa tu nombre completo" id="name-1cd4" name="name" class="u-border-2 u-border-palette-5-base u-input u-input-rectangle" required=""></input>
                      </div>
                      <div class="u-form-email u-form-group">
                        <label for="email-1cd4" class="u-form-control-hidden u-label">Correo</label>
                        <input type="email" placeholder="Ingresa un correo valido" id="email-1cd4" name="email" class="u-border-2 u-border-palette-5-base u-input u-input-rectangle" required=""></input>
                      </div>
                      <div class="u-form-group u-form-message">
                        <label for="message-1cd4" class="u-form-control-hidden u-label">Mensaje</label>
                        <textarea placeholder="Deja aqui tu mensaje" rows="4" cols="50" id="message-1cd4" name="message" class="u-border-2 u-border-palette-5-base u-input u-input-rectangle" required=""></textarea>
                      </div>
                      <div class="u-form-group u-form-submit">
                        <a href="mailto:dmosqana@gmail.com" class="u-btn u-btn-submit u-button-style u-palette-5-base u-btn-1">Enviar</a>
                        <input type="submit" value="submit" class="u-form-control-hidden"></input>
                      </div>
                      <div class="u-form-send-message u-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
                      <div class="u-form-send-error u-form-send-message"> No se puede enviar tu mensaje. Por favor corrige los errores e intenta nuevamente. </div>
                      <input type="hidden" name="formServices" value="286f73467b096b9b17e3347e92146c47"></input>
                    </form>
                  </div>
                </div>
              </div>


              <div class="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout">
                  <div class="u-expanded u-grey-light-2 u-map">
                    <div class="embed-responsive">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127449.06809463825!2d-76.53871021464842!3d3.402946932395762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1689398782197!5m2!1ses-419!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="u-clearfix u-grey-5 u-section-10" id="sec-630d">


      <img src={image('./8a52d4c9d6ea6aa0bf45b43ae3e03b47.jpeg')}
      alt="" 
      class="u-align-left u-expanded-width u-image u-image-1"/>
      <div class="u-clearfix u-gutter-50 u-layout-wrap u-layout-wrap-1">
        <div class="u-gutter-0 u-layout">
          <div class="u-layout-row">
            <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-valign-top u-container-layout-1">
                <h2 class="u-custom-font u-font-oswald u-text u-text-1">CONTACTANOS</h2>
                <p class="u-text u-text-2">3017274992,
                3008682572,
                <a href="mailto:comercial@axeabogados.com.co">comercial@axeabogados.com.co</a>,
                <a href="mailto:marcas@axeabogados.com.co"> marcas@axeabogados.com.co</a></p>
                </div>
            </div>
            <div class="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
              <div class="u-container-layout u-valign-top u-container-layout-2">
                <h2 class="u-custom-font u-font-oswald u-text u-text-3">Villa Fatima, Cali, Valle del Cauca</h2>
                <p class="u-text u-text-4">Cra. 121 # 47 a 123</p>
                <p class="u-text u-text-5">Correspondencia</p>
                <p class="u-text u-text-6">
       
                </p>
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


export default Contacto