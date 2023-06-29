/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineChart({ userData, isLoading }) {
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
    labels: reducedArray.slice(0, 25),
    datasets: [
      {
        label: "Dataset 1",
        data: mergedArray,
        borderColor: "rgb(153, 153, 141)",
        backgroundColor: "rgb(194, 194, 85)",
      },
      {
        label: "Dataset 2",
        data: mergedArray2,
        borderColor: "rgb(235, 24, 9)",
        backgroundColor: "rgb(171, 235, 9)",
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
