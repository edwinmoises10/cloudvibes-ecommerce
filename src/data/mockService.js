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
    }, 1000);
  });
}

//Detalles Products

export function getDBProductsDetails(value) {
  return new Promise((resolve, reject) => {
    const detailsProduct = products.find((d) => d.id === Number(value));

    setTimeout(() => {
      if (detailsProduct) {
        resolve(detailsProduct);
      } else {
        reject(new Error("Product Not Found"));
      }
    }, 1000);
  });
}

//Category Section

export function getCategoryData(value1) {
  return new Promise((resolve, reject) => {
    const categoryProduct = products.filter((e) => e.category === value1);
    setTimeout(() => {
      if (categoryProduct) {
        resolve(categoryProduct);
      } else {
        reject(new Error("Category Not Found"));
      }
    }, 1000);
  });
}

export function getGenreData(valueID) {
  return new Promise((resolve, reject) => {
    const getGenre = products.filter((e) => e.genre === valueID);
    setTimeout(() => {
      if (!getGenre) {
        reject(new Error("Genre not found"));
      } else {
        resolve(getGenre);
      }
    }, 1000);
  });
}
