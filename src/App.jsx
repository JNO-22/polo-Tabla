import { useEffect, useState } from "react";
import TableComponent from "./Components/TableComponent";
import { CircularProgress } from "@mui/material";
import FormComponent from "./Components/FormComponent";
import { mockData } from "./mockData";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProducts(mockData);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1
          style={{
            display: "flex",
            gap: "1em",
            color: "#7f5af0",
            alignItems: "center",
            fontSize: "4em",
          }}
        >
          <CircularProgress />
          Loading...
        </h1>
      ) : (
        <div className="Container">
          <div
            className="title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <h2>Lista de Proyectos</h2>
            <button type="button" onClick={() => setOpen(!open)}>
              Agregar un producto
            </button>
          </div>
          {open && (
            <FormComponent
              setNewData={setProducts}
              setOpen={setOpen}
              products={products}
            />
          )}
          <TableComponent mockData={products} />
        </div>
      )}
    </div>
  );
};

export default App;
