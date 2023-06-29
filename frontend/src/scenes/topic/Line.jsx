/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineGridChart({ userData, isLoading }) {
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

  const data = {
    labels: reducedArray.slice(0, 25),
    datasets: [
      {
        label: "Dataset 1",
        data: mergedArray,
        fill: false,
        borderColor: "rgb(235, 218, 35)",
        backgroundColor: "rgb(235, 218, 35)",
      },
      {
        label: "Dataset 2",
        data: mergedArray2,
        fill: true,
        borderColor: "rgb(35, 235, 152)",
        backgroundColor: "rgb(35, 235, 152)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Grid Line Settings",
      },
    },
    scales: {
      x: {
        border: {
          display: true,
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: function (context) {
            if (context.tick.value > 0) {
              return "rgb(35, 235, 152)";
            } else if (context.tick.value < 0) {
              return "rgb(235, 218, 35)";
            }

            return "#000000";
          },
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
      <h1 style={{ fontFamily: "monospace" }}>Grid Chart</h1>
      <Line data={data} options={options} width={50} height={50} />
    </div>
  );
}
