import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./navbar";

const Home = () => {
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
      <NavBar></NavBar>
      {Data ? (
        <div className="">
          {Data.map((item) => (
            <div className="d-flex justify-content-center mt-5">
              <div className="col-md-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="bg-dark rounded py-1">
                      <h5 className="card-title text-center text-white">
                        <b>{item.product}</b>
                      </h5>
                    </div>
                    <p className="text-muted  ms-3 card-text mt-3">
                       {item.comments}
                    </p>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <span className="text-muted">Talla: </span>
                        <span className="badge bg-secondary rounded-pill">
                          {item.size}
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="text-muted">Marca: </span> 
                        <span className="badge bg-secondary rounded-pill">
                          {item.brand}
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="text-muted">Inventario: </span>
                        <span className="badge bg-secondary rounded-pill">
                          {item.inventory}
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span className="text-muted">Fecha de embarque: </span>
                        <span className="badge bg-secondary rounded-pill">
                          {item.shipment_date}
                        </span>
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
      <footer className="text-center mt-4">
        Desarrollado por Juan Diego Pabon Rios
      </footer>
    </div>
  );
};

export default Home;
