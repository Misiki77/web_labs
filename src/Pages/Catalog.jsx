import React from "react";
import "./CSS/Catalog.css"
import all_product from "../Components/Assets/all_product"
import Item from "../Components/Item/Item"

const Catalog = (props) => {
    return (
        <div className='catalog'>
            <hr />
            <div className="all-products">
                {all_product.map((item, i)=>{
            return <Item key = {i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
            </div>
        </div>
    )
}

export default Catalog