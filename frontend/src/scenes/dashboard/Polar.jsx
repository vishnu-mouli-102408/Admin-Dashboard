/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function PolarChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.region) : ""
    )
  );
  const mergedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.intensity) : ""
    )
  );

  const data = {
    labels: reducedArray.slice(1, 15),
    datasets: [
      {
        data: mergedArray,
      },
    ],
  };

  const options = {
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      elements: {
        arc: {
          backgroundColor:
            "radial-gradient(circle, rgba(196,195,219,1) 0%, rgba(226,223,24,1) 70%, rgba(236,225,227,1) 100%);",
        },
      },
    },
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
      <h1 style={{ fontFamily: "monospace" }}>Polar Area Chart</h1>
      <PolarArea data={data} options={options} width={50} height={50} />
    </div>
  );
}
