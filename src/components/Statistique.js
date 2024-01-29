import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./Statistique.css";

const Statistique = () => {
  const data = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [
      {
        label: "Nombre d'utilisateurs",
        data: [120, 150, 200, 180, 220],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="statistique-container">
      <h1 className="chart-title">Statistiques des utilisateurs</h1>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Statistique;
