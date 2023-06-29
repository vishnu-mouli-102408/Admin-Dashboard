/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { useGetLikelihoodQuery } from "../../state/api";
import { Box } from "@mui/material";
import PolarAreaChart from "../likelihood/Bubble";
import PieChart from "../likelihood/Pie";
import DoughnutChart from "../likelihood/Donut";

function Likelihood(props) {
  const { data: userData, isLoading } = useGetLikelihoodQuery();
  //   console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="LIKELIHOOD"
        subtitle="See the Visualizations for Likelihood Here"
      />
      <DoughnutChart userData={userData} isLoading={isLoading} />
      <PolarAreaChart userData={userData} isLoading={isLoading} />
      <PieChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Likelihood;
