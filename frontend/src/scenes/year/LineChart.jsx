/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.start_year) : ""
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
  const mergedArray3 = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.relevance) : ""
    )
  );
  const data = {
    labels: reducedArray,
    datasets: [
      {
        label: "Unfilled",
        fill: false,
        backgroundColor: "rgb(16, 148, 230)",
        borderColor: "rgb(230, 23, 16)",
        data: mergedArray3,
      },
      {
        label: "Dashed",
        fill: false,
        backgroundColor: "rgb(16, 230, 109)",
        borderColor: "rgb(216, 230, 16)",
        borderDash: [5, 5],
        data: mergedArray,
      },
      {
        label: "Filled",
        backgroundColor: "rgb(74, 232, 187)",
        borderColor: "rgb(230, 23, 16)",
        data: mergedArray2,
        fill: true,
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
      <h1 style={{ fontFamily: "monospace" }}>Line Chart</h1>
      <Line data={data} options={options} width={50} height={50} />
    </div>
  );
}
