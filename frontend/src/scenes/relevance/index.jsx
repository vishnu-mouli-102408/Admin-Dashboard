/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { useGetLikelihoodQuery } from "../../state/api";
import { Box } from "@mui/material";
import BarChart from "../relevance/BarChart";
import LineChart from "../relevance/LineChart";
import PieChart from "../relevance/PieChart";

function Revelance(props) {
  const { data: userData, isLoading } = useGetLikelihoodQuery();
  console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="RELEVANCE"
        subtitle="See the Visualizations for Relevance Here"
      />
      <BarChart userData={userData} isLoading={isLoading} />
      <LineChart userData={userData} isLoading={isLoading} />
      <PieChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Revelance;
