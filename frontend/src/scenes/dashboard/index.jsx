/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import LineChart from "../dashboard/LineChart";
import LineC from "../dashboard/Line";
import LineP from "../dashboard/LineP";
import RadarChart from "../dashboard/Radar";
import PolarChart from "../dashboard/Polar";
import PieChart from "../dashboard/PieChart";

import { useGetIntensityQuery } from "../../state/api";
import { Box } from "@mui/material";

function Dashboard(props) {
  const { data: userData, isLoading } = useGetIntensityQuery();
  console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="DASHBOARD"
        subtitle="See the Visualizations for Dashboard Here"
      />
      <PolarChart userData={userData} isLoading={isLoading} />
      <LineChart userData={userData} isLoading={isLoading} />
      <LineC userData={userData} isLoading={isLoading} />
      <PieChart userData={userData} isLoading={isLoading} />
      <RadarChart userData={userData} isLoading={isLoading} />
      <LineP userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Dashboard;
