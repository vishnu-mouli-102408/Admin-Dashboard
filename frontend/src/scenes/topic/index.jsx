/* eslint-disable no-unused-vars */
import Header from "../../components/Header";
import { useGetTopicQuery } from "../../state/api";
import LineChart from "../topic/LineChart";
import BarChart from "../topic/Bar";
import LineGridChart from "../topic/Line";
import { Box } from "@mui/material";

function Topic(props) {
  const { data: userData, isLoading } = useGetTopicQuery();
  //   console.log(userData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TOPIC" subtitle="See the Visualizations for Topic Here" />
      <LineChart userData={userData} isLoading={isLoading} />
      <BarChart userData={userData} isLoading={isLoading} />
      <LineGridChart userData={userData} isLoading={isLoading} />
    </Box>
  );
}

export default Topic;
