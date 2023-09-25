import React from "react";
import { useCart } from "react-use-cart";
import data from "./Planes";

const Cart =(props)=>{
    const {
        isEmpty,
        items, 
        removeItem,
        emptyCart,
    }= useCart();

    if (isEmpty) return <h1 className="text-center">No has seleccionado un plan</h1>
    return(
        <section clasName="py-4 container">
            <div className = "row justify-content-center">
                <div className="col-12">
                    <h5>Este es el plan que has seleccionado:</h5>
                    <table className="table table-ligth table-hover m-0">
                        <tbody>
                        {items.map((item, index)=>{
                            return(
                            <tr key={index}>
                                <td><img src={item.img} style={{height: '6rem'}}/></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-danger ms-2"
                                    onClick={()=>removeItem()}>Remover plan</button>
                                </td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )

}

export default Cart;