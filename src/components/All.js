import React, { useState,useEffect } from "react";
import "./All.css";
import axios from "axios";

const All = () => {

  const [newMarque, setNewMarque] = useState('');
  const [newVitesse, setNewVitesse] = useState('');
  const [newMoteur, setNewMoteur] = useState('');
  const [newCategorie, setNewCategorie] = useState('');
  const [newEtat, setNewEtat] = useState('');
  const [loadingInsert, setLoadingInsert] = useState(false);
  const [errorInsert, setErrorInsert] = useState(null);

  const handleAddCategorie = async () => {
    try {
      setLoadingInsert(true);
      await axios.post('https://annoncevoiture-production.up.railway.app/annonce/categorie', { nomCategorie: newCategorie });
      setNewCategorie('');
      setLoadingInsert(false);
      fetchData();
    } catch (errorInsert) {
      setErrorInsert(errorInsert);
      setLoadingInsert(false);
    }
  };

  const handleAddEtat = async () => {
    try {
      setLoadingInsert(true);
      await axios.post('https://annoncevoiture-production.up.railway.app/annonce/etat', { nomEtat: newEtat });
      setNewEtat('');
      setLoadingInsert(false);
      fetchData();
    } catch (errorInsert) {
      setErrorInsert(errorInsert);
      setLoadingInsert(false);
    }
  };

  const handleAddMarque = async () => {
    try {
      setLoadingInsert(true);
      await axios.post('https://annoncevoiture-production.up.railway.app/annonce/marque', { nomMarque: newMarque });
      setNewMarque('');
      setLoadingInsert(false);
      fetchData();
    } catch (errorInsert) {
      setErrorInsert(errorInsert);
      setLoadingInsert(false);
    }
  };

  const handleAddVitesse = async () => {
    try {
      setLoadingInsert(true);
      await axios.post('https://annoncevoiture-production.up.railway.app/annonce/vitesse', { nomVitesse: newVitesse });
      setNewVitesse('');
      setLoadingInsert(false);
      fetchData();
    } catch (errorInsert) {
      setErrorInsert(error);
      setLoadingInsert(false);
    }
  };

  const handleAddMoteur = async () => {
    try {
      setLoadingInsert(true);
      await axios.post('https://annoncevoiture-production.up.railway.app/annonce/moteur', { nomMoteur: newMoteur });
      setNewMoteur('');
      setLoadingInsert(false);
      fetchData();
    } catch (errorInsert) {
      setErrorInsert(errorInsert);
      setLoadingInsert(false);
    }
  };



  const [Categorie, setCategorie] = useState([]);
  const [Etat, setEtat] = useState([]);
  const [Moteur, setMoteur] = useState([]);
  const [Vitesse, setVitesse] = useState([]);
  const [Marque, setMarque] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      const moteurResponse = await axios.get(
        "https://annoncevoiture-production.up.railway.app/annonce/moteur"
      );
      const vitesseResponse = await axios.get(
        "https://annoncevoiture-production.up.railway.app/annonce/vitesse"
      );
      const etatResponse = await axios.get(
        "https://annoncevoiture-production.up.railway.app/annonce/etat"
      );
      const marqueResponse = await axios.get(
        "https://annoncevoiture-production.up.railway.app/annonce/marque"
      );
      const categorieResponse = await axios.get(
        "https://annoncevoiture-production.up.railway.app/annonce/categorie"
      );
      setMoteur(moteurResponse.data);
      setVitesse(vitesseResponse.data);
      setMarque(marqueResponse.data);
      setEtat(etatResponse.data);
      setCategorie(categorieResponse.data);
      
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
      <h1 className="heading">Listes des Detais de voiture</h1>
      <div className="grid-container">
      <div id="categorie">
      <h3>Categorie</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Categorie</th>
            </tr>
          </thead>
          <tbody>
            {Categorie.map((row) => (
              <tr key={row.idCategorie}>
                <td>{row.idCategorie}</td>
                <td>{row.nomCategorie}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-category">
          <input
            type="text"
            placeholder="Nouveau categorie"
            value={newCategorie}
            onChange={(e) => setNewCategorie(e.target.value)}
            className="category-input"
          />
          <button onClick={handleAddCategorie} disabled={loadingInsert} className="add-button">
          {loadingInsert ? 'Adding...' : '+ Ajouter'}
          </button>
        </div>
      </div>

      <div id="etat">
      <h3>Etat</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Etat</th>
            </tr>
          </thead>
          <tbody>
            {Etat.map((row) => (
              <tr key={row.idEtat}>
                <td>{row.idEtat}</td>
                <td>{row.nomEtat}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-etat">
        <input
            type="text"
            placeholder="Nouvelle Etat"
            value={newEtat}
            onChange={(e) => setNewEtat(e.target.value)}
            className="etat-input"
          />
          <button onClick={handleAddEtat} disabled={loadingInsert} className="add-button">
          {loadingInsert ? 'Adding...' : '+ Ajouter'}
          </button>
        </div>
      </div>

      <div id="moteur">
      <h3>Moteur</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Moteur</th>
            </tr>
          </thead>
          <tbody>
            {Moteur.map((row) => (
              <tr key={row.idMoteur}>
                <td>{row.idMoteur}</td>
                <td>{row.nomMoteur}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-moteur">
        <input
            type="text"
            placeholder="Nouveau moteur"
            value={newMoteur}
            onChange={(e) => setNewMoteur(e.target.value)}
            className="moteur-input"
          />
          <button onClick={handleAddMoteur} disabled={loadingInsert} className="add-button">
          {loadingInsert ? 'Adding...' : '+ Ajouter'}
          </button>
        </div>
      </div>

      <div id="vitesse">
      <h3>Vitesse</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Vitesse</th>
            </tr>
          </thead>
          <tbody>
            {Vitesse.map((row) => (
              <tr key={row.idVitesse}>
                <td>{row.idVitesse}</td>
                <td>{row.nomVitesse}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-vitesse">
        <input
            type="text"
            placeholder="Nouveau vitesse"
            value={newVitesse}
            onChange={(e) => setNewVitesse(e.target.value)}
            className="vitesse-input"
          />
          <button onClick={handleAddVitesse} disabled={loadingInsert} className="add-button">
          {loadingInsert ? 'Adding...' : '+ Ajouter'}
          </button>
        </div>
      </div>

      <div id="marque">
      <h3>Marque</h3>
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Marque</th>
            </tr>
          </thead>
          <tbody>
            {Marque.map((row) => (
              <tr key={row.idMarque}>
                <td>{row.idMarque}</td>
                <td>{row.nomMarque}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-marque">
          <input
            type="text"
            placeholder="Nouveau marque"
            value={newMarque}
            onChange={(e) => setNewMarque(e.target.value)}
            className="marque-input"
          />
          <button onClick={handleAddMarque} disabled={loadingInsert} className="add-button">
          {loadingInsert ? 'Adding...' : '+ Ajouter'}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default All;