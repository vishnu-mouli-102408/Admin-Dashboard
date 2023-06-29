/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bubble } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function BubbleChart({ userData, isLoading }) {
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

  const data = {
    labels: reducedArray,
    datasets: [
      {
        label: "Dataset 1",
        data: mergedArray2,
        borderColor: "rgb(216, 230, 16)",
        backgroundColor: "rgb(212, 15, 25)",
      },
      {
        label: "Dataset 2",
        data: mergedArray,
        borderColor: "rgb(245, 181, 241)",
        backgroundColor: "rgb(23, 230, 161)",
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
      <h1 style={{ fontFamily: "monospace" }}>Bubble Chart</h1>
      <Bubble data={data} options={options} width={50} height={50} />
    </div>
  );
}
