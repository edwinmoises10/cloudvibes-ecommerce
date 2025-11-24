import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* ItemList */}
      <ItemListContainer title="Welcome to CloudVibes" />
      
    </>
  );
}

export default App;
