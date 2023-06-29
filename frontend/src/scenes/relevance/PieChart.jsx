/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function PieChart({ userData, isLoading }) {
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
    labels: reducedArray.slice(1, 7),
    datasets: [
      {
        backgroundColor: ["#AAA", "#777"],
        data: mergedArray,
      },
      {
        backgroundColor: ["hsl(0, 100%, 60%)", "hsl(0, 100%, 35%)"],
        data: mergedArray2,
      },
      {
        backgroundColor: ["hsl(100, 100%, 60%)", "hsl(100, 100%, 35%)"],
        data: mergedArray2,
      },
      {
        backgroundColor: ["hsl(180, 100%, 60%)", "hsl(180, 100%, 35%)"],
        data: mergedArray,
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
      <h1 style={{ fontFamily: "monospace" }}>Multi Series Pie Chart</h1>
      <Pie data={data} options={options} width={50} height={50} />
    </div>
  );
}
