/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineChart({ userData, isLoading }) {
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
        label: "Cubic interpolation (monotone)",
        data: mergedArray,
        borderColor: "rgb(10, 247, 57)",
        fill: false,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "Cubic interpolation",
        data: mergedArray2,
        borderColor: "rgb(14, 7, 230)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Linear interpolation (default)",
        data: mergedArray3,
        borderColor: "rgb(230, 63, 7)",
        fill: false,
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
