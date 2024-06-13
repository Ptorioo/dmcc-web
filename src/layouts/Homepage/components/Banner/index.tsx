import React from "react";
import Box from "@mui/material/Box";
import banner from "../../../../assets/banner-1.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: { xs: 5, sm: 8, md: 10 },
        width: { xs: 300, sm: 550, md: 850 },
        height: { xs: 110, sm: 200, md: 310 },
      }}
    ></Box>
  );
};

export default Banner;
