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

export function getDBProductsDetails(){

    

}