/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function BarChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.sector) : ""
    )
  );
  const mergedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.intensity) : ""
    )
  );
  const data = {
    labels: reducedArray,
    datasets: [
      {
        label: "Fully Rounded",
        data: mergedArray,
        borderColor: "rgb(222, 77, 33)",
        backgroundColor: "rgb(222, 210, 206)",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Small Radius",
        data: mergedArray,
        borderColor: "rgb(66, 129, 245)",
        backgroundColor: "rgb(222, 77, 33)",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div
      style={{
        width: 650,
        textAlign: "center",
        margin: "auto",
        padding: "3%",
      }}
    >
      <h1 style={{ fontFamily: "monospace" }}>Bar Chart</h1>
      <Bar data={data} options={options} width={50} height={50} />
    </div>
  );
}
