import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";
import Header from "../../components/header";

export default function Map() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const result = await fetch("http://localhost:5555/empresas");
      const data = await result.json();
      setCompanies(data);
    }

    getCompanies();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="map-main">
        <div className="container-map">
          <MapContainer
            center={[-27.0968, -52.6186]}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {companies.map((item) => (
              <Marker position={[item.latitude, item.longitude]}>
                <Popup>
                  <p>{`Razão Social: ${item.corporateName}`}</p>
                  <p>{`Nome Fantasia: ${item.fantasyName}`}</p>
                  <p>{`Endereço: ${item.address}, ${item.number}, ${item.district}, ${item.city}`}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
}
