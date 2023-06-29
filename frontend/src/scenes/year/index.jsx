/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { useGetYearQuery } from "../../state/api";
import LineChart from "../year/LineChart";
import BubbleChart from "../year/Bubble";
import RadarChart from "../year/Radar";
import { Box } from "@mui/material";

function Year(props) {
  const { data: userData, isLoading } = useGetYearQuery();
  //   console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="YEAR" subtitle="See the Visualizations for Year Here" />
      <LineChart userData={userData} isLoading={isLoading} />
      <BubbleChart userData={userData} isLoading={isLoading} />
      <RadarChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Year;
