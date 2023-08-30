import './Itemcard.css';
const Itemcard = (props)=> {

const listItems = props.desc.map((desc) =>
  <li key={desc.toString()}>
    {desc}
  </li>
);

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
                        <button className="btn btn-primary">Contratar</button>
                        </div>
                </div>
            </div>
        )
    
}

export default Itemcard