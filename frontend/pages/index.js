import axios from "axios";
import { useEffect, useState } from "react";

const MyComponent = () => {
  //Define un estado para almacenar los datos recibidos de la API
  const [Data, setData] = useState(null);

  const fetchData = async () => {
    try {
      //Realiza una petición get a la api utilizando Axios
      const response = await axios.get("http://localhost:8000/api/products");
      //Actualiza el estado con los datos recibidos
      setData(response.data);
    } catch (error) {
      console.error("Hubo un problema:", error);
    }
  };

  //Llama a la función fetchData cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []); //El segundo argumento [] asegura que useEffect solo se ejecute una vez, cuando el componente se monta

  //Mapeo a los datos recibidos de la API
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Inicio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="http://127.0.0.1:8000/brand">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://127.0.0.1:8000/product">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000">
                  Ecommerce
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {Data ? (
        <div className="">
          {Data.map((item) => (
            <div className="d-flex justify-content-center mt-5">
              <div className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      <b>{item.product}</b>
                    </h5>
                    <p className="card-text"><b>Observaciones:</b> {item.comments}</p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>Talla:</b> {item.size}
                      </li>
                      <li className="list-group-item">
                        <b>Marca:</b> {item.brand}
                      </li>
                      <li className="list-group-item">
                        <b>Inventario:</b> {item.inventory}
                      </li>
                      <li className="list-group-item">
                        <b>Fecha de embarque:</b> {item.shipment_date}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
      <footer className="text-center mt-4">Desarrollado por Juan Diego Pabon Rios</footer>
    </div>
  );
};

export default MyComponent;
