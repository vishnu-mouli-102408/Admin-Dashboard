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
      userData || !isLoading ? userData.user.map((item) => item.likelihood) : ""
    )
  );
  const data = {
    labels:
      //   userData || !isLoading ? userData.user.map((item) => item.pestle) : "",
      reducedArray.slice(1, 10),
    datasets: [
      {
        label: "# of Likelihood",
        data: mergedArray,
        //   userData || !isLoading
        //     ? userData.user.map((item) => item.intensity)
        //     : "",
        backgroundColor: [
          "#007D9C",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
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
      <Pie data={data} options={options} width={50} height={50} />
    </div>
  );
}
