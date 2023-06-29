/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function BarChart({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.topic) : ""
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
    labels: reducedArray.slice(0, 25),
    datasets: [
      {
        type: "bar",
        label: "Dataset 1",
        backgroundColor: "rgb(225, 243, 245)",
        borderColor: "rgb(225, 243, 245)",
        data: mergedArray,
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(237, 146, 43)",
        borderColor: "rgb(237, 146, 43)",
        data: mergedArray2,
      },
      {
        type: "line",
        label: "Dataset 3",
        backgroundColor: "rgb(235, 35, 48)",
        borderColor: "rgb(235, 35, 48)",
        fill: false,
        data: mergedArray3,
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
