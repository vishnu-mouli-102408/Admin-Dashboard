/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.sector) : ""
    )
  );
  const mergedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.likelihood) : ""
    )
  );
  const data = {
    labels:
      //   userData || !isLoading ? userData.user.map((item) => item.pestle) : "",
      reducedArray.slice(1, 10),
    datasets: [
      {
        label: "Bar Dataset",
        data: mergedArray,
        //   userData || !isLoading
        //     ? userData.user.map((item) => item.intensity)
        //     : "",
        responsiveness: true,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ],
      },
    ],
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
      <PolarArea data={data} width={50} height={50} />
    </div>
  );
}
