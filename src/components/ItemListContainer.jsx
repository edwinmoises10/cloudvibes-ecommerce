import { useEffect, useState } from "react";
import Item from "./Item";
import LoadingUI from "./LoadingUI";
import { useParams } from "react-router-dom";
import { getBDData, getCategoryData, getGenreData } from "../data/firestore";


const ItemListContainer = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const { categoryID, genreID } = useParams();

  useEffect(() => {
    if (categoryID) {
      getCategoryData(categoryID)
        .then((d) => setDbProducts(d))
        .catch((err) => err);
    } else if (genreID) {
      getGenreData(genreID)
        .then((d) => setDbProducts(d))
        .catch((e) => e);
    } else {
      getBDData()
        .then((data) => setDbProducts(data))
        .catch((err) => err);
    }
  }, [categoryID, genreID]);

  return (
    <>
      {dbProducts.length === 0 ? (
        <LoadingUI />
      ) : (
        <div className=" flex flex-wrap justify-center items-center pt-7 gap-6 p-2 ">
          {dbProducts.map((e) => (
            <Item key={e.id} {...e} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
