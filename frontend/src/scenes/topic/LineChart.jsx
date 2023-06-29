/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineChart({ userData, isLoading }) {
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
      userData || !isLoading ? userData.user.map((item) => item.relevance) : ""
    )
  );

  const data = {
    labels: reducedArray.slice(0, 20),
    datasets: [
      {
        label: "My First dataset",
        data: mergedArray2,
        borderColor: "rgb(252, 252, 5)",
        backgroundColor: "rgb(252, 252, 5)",
        fill: true,
      },
      {
        label: "My Second dataset",
        data: mergedArray,
        borderColor: "rgb(242, 5, 25)",
        backgroundColor: "rgb(242, 5, 25)",
        fill: true,
      },
      {
        label: "My Third dataset",
        data: mergedArray3,
        borderColor: "rgb(24, 217, 242)",
        backgroundColor: "rgb(24, 217, 242)",
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
