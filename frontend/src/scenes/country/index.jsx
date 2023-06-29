/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { useGetCountryQuery } from "../../state/api";
import { Box } from "@mui/material";
import BarChart from "../country/BarChart";
import LineChart from "../country/LineChart";
import RadarChart from "../country/Radar";

function Country(props) {
  const { data: userData, isLoading } = useGetCountryQuery();
  //   console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="YEAR" subtitle="See the Visualizations for Year Here" />
      <BarChart userData={userData} isLoading={isLoading} />
      <LineChart userData={userData} isLoading={isLoading} />
      <RadarChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Country;
