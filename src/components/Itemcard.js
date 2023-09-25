import './Itemcard.css';
import Cart from './Cart'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CartProvider, useCart} from "react-use-cart";


const Itemcard = (props)=> {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const listItems = props.desc.map((desc) =>
  <li key={desc.toString()}>
    {desc}
  </li>);

const { addItem } = useCart();

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

                        <div>
                           <button  className="btn btn-primary" onClick={()=>{addItem(props.item);handleShow()}}>Contratar</button>
                        </div>

                        </div>
                </div>

                <CartProvider>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Completar compra</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>¡Ya casi lo logras! Completa tu pedido
                  <Cart/>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Volver
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Enviar pago seguro
                    </Button>
                  </Modal.Footer>
                </Modal>
                </CartProvider>

         

              

        </div>

        )
    
}

export default Itemcard