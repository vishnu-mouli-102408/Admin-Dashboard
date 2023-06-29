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

  const data = {
    labels: reducedArray.slice(1, 7),
    datasets: [
      {
        backgroundColor: ["#AAA", "#777"],
        data: mergedArray,
      },
      {
        backgroundColor: ["hsl(44°, 98%, 50%)", "hsl(44°, 14%, 58%)"],
        data: mergedArray2,
      },
      {
        backgroundColor: ["hsl(100, 100%, 60%)", "hsl(172°, 80%, 50%"],
        data: mergedArray2,
      },
      {
        backgroundColor: ["hsl(352°, 92%, 48%)", "hsl(180, 100%, 35%)"],
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
