import React, { useEffect } from "react";
import TopNavBar from "../../components/TopNavBar";
import Grid from "@mui/material/Grid";
import Banner from "./components/Banner";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import bg from "../../assets/bg-daw.webp";

const Homepage = () => {
  useEffect(() => {
    const fb = (window as any).FB;
    if (fb) {
      fb.XFBML.parse();
    }
  }, []);

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
          msFilter: "blur(10px)",
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
          <Grid item xs={12} sx={{ margin: "20px" }}>
            <Paper sx={{ padding: 1 }}>
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNTUDigitalMusic%2Fposts%2Fpfbid02CRd5hTUCbTY7deqafRdjrKEdQLHGZQz7X5nPLHkYPK2hJprB9P7ZYMfgMcdGV8brl&show_text=true&width=auto"
                style={{
                  border: "none",
                  overflow: "hidden",
                  width: "100%",
                }}
                height={450}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ margin: "20px" }}>
            <Paper sx={{ padding: 1 }}>
              {" "}
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNTUDigitalMusic%2Fposts%2Fpfbid0cWCh3AHCBMByL8Rrx4DPprQML7XZZzWp1MsY3bf6hYtKB6xjJqEmzJbpZcTLLMZKl&show_text=true&width=auto"
                style={{
                  border: "none",
                  overflow: "hidden",
                  width: "100%",
                }}
                height={450}
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
