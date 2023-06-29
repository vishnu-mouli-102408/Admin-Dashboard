/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LineC({ userData, isLoading }) {
  const reducedArray = Array.from(
    new Set(
      userData || !isLoading ? userData.user.map((item) => item.country) : ""
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
    labels: reducedArray.slice(1, 25),
    datasets: [
      {
        label: "Dataset 1",
        animations: {
          y: {
            duration: 2000,
            delay: 500,
          },
        },
        data: mergedArray,
        borderColor: "rgb(232, 213, 160)",
        backgroundColor: "rgb(226, 242, 5)",
        fill: 1,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: mergedArray2,
        borderColor: "rgb(240, 14, 41)",
        backgroundColor: "rgb(18, 227, 223)",
      },
    ],
  };

  const options = {
    options: {
      animations: {
        y: {
          easing: "easeInOutElastic",
          from: (ctx) => {
            if (ctx.type === "data") {
              if (ctx.mode === "default" && !ctx.dropped) {
                ctx.dropped = true;
                return 0;
              }
            }
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
      <h1 style={{ fontFamily: "monospace" }}>Line Chart</h1>
      <Line data={data} options={options} width={50} height={50} />
    </div>
  );
}
