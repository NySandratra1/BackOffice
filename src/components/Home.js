import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "./Home.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import axios from "axios";


config.autoAddCss = false; 

const Home = () => {
  const [annonce, setAnnonce] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingInsert, setLoadingInsert] = useState(false);
  const [errorInsert, setErrorInsert] = useState(null);

  const handleDelete = (id) => {
      try {
        setLoadingInsert(true);
        axios.delete('http://annoncevoiture-production.up.railway.app/annonce/annonceaccepte', { data: { idAnnonce: id } });
        setLoadingInsert(false);
        fetchData();
      } catch (errorInsert) {
        setErrorInsert(errorInsert);
        setLoadingInsert(false);
      }
  };

  const handleAdd = (id) => {
      try {
        setLoadingInsert(true);
        axios.post('http://annoncevoiture-production.up.railway.app/annonce/annonceaccepte', { idAnnonce : id });
        setLoadingInsert(false);
        fetchData();
      } catch (errorInsert) {
        setErrorInsert(errorInsert);
        setLoadingInsert(false);
      }
  };

  const fetchData = async () => {
    try {
      const annonceResponse = await axios.get(
               "https://annoncevoiture-production.up.railway.app/annonce/annonceadmin"

      );
      setAnnonce(annonceResponse.data);
      
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="spinner"></div>
  if (error) return <div>Error: {error.message}</div>;


  return (
    
    <div className="container">
      <h1 className="heading">Listes des annonces a valider</h1>
    <table>
      <thead>
        <tr>
          <th>Proprietaire</th>
          <th>Categorie</th>
          <th>Etat</th>
          <th>Marque</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {annonce.map((row) => (
          <tr key={row.idAnnonce}>
            <td>{row.user.nomUtilisateur}</td>
            <td>{row.voiture.categorie.nomCategorie}</td>
            <td>{row.voiture.etat.nomEtat}</td>
            <td>{row.voiture.marque.nomMarque}</td>
            <td>
              <button onClick={() => handleAdd(row.idAnnonce)}>Valide</button>
              <button onClick={() => handleDelete(row.idAnnonce)}>Non valide</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
export default Home;
