/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Radar } from "react-chartjs-2";
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
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
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
      <h1 style={{ fontFamily: "monospace" }}>Radar Chart</h1>
      <Radar data={data} width={50} height={50} />
    </div>
  );
}
