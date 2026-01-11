import { useEffect, useState } from "react";
import { getBDData } from "../data/mockService";
import Item from "./Item";


const ItemListContainer = () => {
  
  const [dbProducts,setDbProducts]= useState([])

  useEffect(()=>{
    getBDData()
    .then((data)=>setDbProducts(data))
    .catch((err)=> err)
  },[])

  return (
    <>
      <div className=" flex flex-wrap justify-center items-center pt-7 gap-6 p-2 ">
        {
          dbProducts.map((e)=>(
            <Item 
            key= {e.id}
            {...e}
            />
          ))
        }
      </div>
 
    </>
  );
};

export default ItemListContainer;


