/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function BarChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.country) : ""
    )
  );
  const mergedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.intensity) : ""
    )
  );

  const mergedArray2 = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.likelihood) : ""
    )
  );

  const data = {
    labels: reducedArray.slice(2, 22),
    datasets: [
      {
        label: "Dataset 1",
        data: mergedArray,
        backgroundColor: "rgb(38, 240, 236)",
      },
      {
        label: "Dataset 2",
        data: mergedArray2,
        backgroundColor: "rgb(233, 240, 38)",
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
