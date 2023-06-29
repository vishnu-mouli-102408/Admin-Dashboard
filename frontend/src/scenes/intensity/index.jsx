/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import PieChart from "../intensity/PieChart";
import RadarChart from "../intensity/Radar";
import DoughnutChart from "../intensity/Donut";
import { useGetIntensityQuery } from "../../state/api";
import { Box } from "@mui/material";

function Intensity(props) {
  const { data: userData, isLoading } = useGetIntensityQuery();
  // console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="INTENSITY"
        subtitle="See the Visualizations for Intensity Here"
      />
      <PieChart userData={userData} isLoading={isLoading} />
      <RadarChart userData={userData} isLoading={isLoading} />
      <DoughnutChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Intensity;
