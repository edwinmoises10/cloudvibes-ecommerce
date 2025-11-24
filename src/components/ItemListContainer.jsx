const ItemListContainer = (props) => {
  const { title } = props;

  return (
    <>
      <h1
        className="flex justify-center items-center py-25
        text-9xl text-indigo-500 group-hover:text-white">
        {title}
      </h1>
    </>
  );
};

export default ItemListContainer;
