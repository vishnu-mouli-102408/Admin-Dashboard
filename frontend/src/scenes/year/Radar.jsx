/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function RadarChart({ userData, isLoading }) {
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
        label: "Skip first dataset",
        data: mergedArray2,
        borderColor: "rgb(74, 232, 187)",
        backgroundColor: "rgb(230, 23, 16)",
      },
      {
        label: "Skip mid dataset",
        data: mergedArray,
        borderColor: "rgb(109, 151, 163)",
        backgroundColor: "rgb(124, 247, 167)",
      },
      {
        label: "Skip last dataset",
        data: mergedArray3,
        borderColor: "rgb(189, 141, 87)",
        backgroundColor: "rgb(250, 245, 247)",
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
