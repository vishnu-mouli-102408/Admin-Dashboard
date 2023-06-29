/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function RadarChart({ userData, isLoading }) {
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

  const data = {
    labels: reducedArray.slice(0, 30),
    datasets: [
      {
        data: mergedArray,
      },
    ],
  };

  function getLineColor(ctx) {
    return "rgb(38, 242, 19)";
  }

  function alternatePointStyles(ctx) {
    const index = ctx.dataIndex;
    return index % 2 === 0 ? "circle" : "rect";
  }

  function makeHalfAsOpaque(ctx) {
    return "rgb(38, 242, 19)";
  }

  function make20PercentOpaque(ctx) {
    return "rgb(38, 242, 19)";
  }

  function adjustRadiusBasedOnData(ctx) {
    const v = ctx.parsed.y;
    return v < 10 ? 5 : v < 25 ? 7 : v < 50 ? 9 : v < 75 ? 11 : 15;
  }

  const options = {
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      elements: {
        line: {
          backgroundColor: make20PercentOpaque,
          borderColor: getLineColor,
        },
        point: {
          backgroundColor: getLineColor,
          hoverBackgroundColor: makeHalfAsOpaque,
          radius: adjustRadiusBasedOnData,
          pointStyle: alternatePointStyles,
          hoverRadius: 15,
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
      <h1 style={{ fontFamily: "monospace" }}>Radar Chart</h1>
      <Radar data={data} options={options} width={50} height={50} />
    </div>
  );
}
