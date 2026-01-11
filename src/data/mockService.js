import products from "./products";

// Products

export function getBDData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products && products.length) {
        resolve(products);
      } else {
        reject(new Error("No Connection with DB"));
      }
    }, 200);
  });
}

//Detalles Products

export function getDBProductsDetails(value){
    return new Promise ((resolve, reject)=>{
        const detailsProduct = products.find((d)=> d.id === Number(value))
       
    
        setTimeout(() => {
            if(detailsProduct){
                resolve(detailsProduct)
            }else{
                reject(new Error("Product Not Found"))
            }
        }, 2000);
    })

    

}