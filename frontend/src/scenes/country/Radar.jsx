/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function RadarChart({ userData, isLoading }) {
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
  const mergedArray3 = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.intensity) : ""
    )
  );

  const data = {
    labels: reducedArray.slice(2, 30),
    datasets: [
      {
        label: "Skip first dataset",
        data: mergedArray,
        borderColor: "rgb(62, 240, 237)",
        backgroundColor: "rgb(15, 245, 188)",
      },
      {
        label: "Skip mid dataset",
        data: mergedArray2,
        borderColor: "rgb(15, 149, 245)",
        backgroundColor: "rgb(62, 240, 237)",
      },
      {
        label: "Skip last dataset",
        data: mergedArray3,
        borderColor: "rgb(245, 15, 23)",
        backgroundColor: "rgb(15, 245, 99)",
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
      <h1 style={{ fontFamily: "monospace" }}>Radar Chart</h1>
      <Radar data={data} options={options} width={50} height={50} />
    </div>
  );
}
