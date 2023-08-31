import './Itemcard.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const Itemcard = (props)=> {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const listItems = props.desc.map((desc) =>
  <li key={desc.toString()}>
    {desc}
  </li>);



        return (
   
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div class="card p-0 overflow-hiden h-100 shadow">
                    <img src={props.img} class="card-img-top img-fluid" alt="..."/>
                        <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <p className="card-text-price">{props.price}</p>
                        <ul className="card-text">
                            <li>{listItems}</li>
                        </ul>
                        <button className="btn btn-primary" onClick={handleShow}>Contratar</button>
                        </div>
                </div>


                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Completar compra</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>¡Ya casi lo logras! Completa tu pedido</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Volver
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Enviar pago seguro
                    </Button>
                  </Modal.Footer>
                </Modal>
         

              

        </div>

        )
    
}

export default Itemcard