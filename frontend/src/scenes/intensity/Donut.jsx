/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
export default function PieChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.pestle) : ""
    )
  );
  const mergedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.intensity) : ""
    )
  );
  const data = {
    labels:
      //   userData || !isLoading ? userData.user.map((item) => item.pestle) : "",
      reducedArray,
    datasets: [
      {
        label: "Intensity Dataset",
        data: mergedArray,
        //   userData || !isLoading
        //     ? userData.user.map((item) => item.intensity)
        //     : "",
        responsiveness: true,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
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
      <h1 style={{ fontFamily: "monospace" }}>Doughnut Chart</h1>
      <Doughnut data={data} width={50} height={50} />
    </div>
  );
}
