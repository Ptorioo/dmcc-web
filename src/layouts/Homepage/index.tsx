import React from "react";
import TopNavBar from "../../components/TopNavBar";
import Grid from "@mui/material/Grid";
import Banner from "./components/Banner";
import Box from "@mui/material/Box";
import bg from "../../assets/bg-daw.webp";

const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          filter: "blur(5px)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
          },
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          paddingTop: "30px",
        }}
      >
        <TopNavBar />
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Banner />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
