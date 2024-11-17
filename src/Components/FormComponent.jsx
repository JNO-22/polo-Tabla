/* eslint-disable react/prop-types */
import { FormControl, FormLabel } from "@mui/material";
const FormComponent = ({ setOpen, setNewData, products }) => {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProduct = Object.fromEntries(formData);
    newProduct.id = products.length + 1;
    setNewData([...products, newProduct]);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="form-Container">
      <form onSubmit={handleSubmit}>
        <h2>Agregar producto</h2>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <input required name="nombre" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Precio</FormLabel>
          <input required name="precio" type="number" />
        </FormControl>
        <FormControl>
          <FormLabel>Categoria</FormLabel>
          <input required name="categoria" type="text" />
        </FormControl>
        <div className="buttons">
          <button type="submit">Agregar</button>
          <button id="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
