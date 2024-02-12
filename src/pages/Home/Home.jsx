import { Box, Button, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#0F3552",
        pl: { xs: "30px", sm: "50px", md: "90px", lg: "180px" },
        pr: { xs: "30px", sm: "50px", md: "80px", lg: "180px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              color: "white",
              pt: { xs: "50px", lg: "100px" },
              pb: { sx: "20px", lg: "100px" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
              }}
            >
              At Achieve, it’s not what we stand for, it’s who we stand for.
            </Typography>
            <Button
              sx={{
                mt: "30px",
                width: { xs: "90%", sm: "50%", md: "50%" },
                backgroundColor: "#3300FF",
                textTransform: "capitalize",
              }}
              variant="contained"
            >
              See personal offer
            </Button>
            <br></br>
            <Button
              sx={{
                mt: "20px",
                color: "white",
                borderColor: "white",
                width: { xs: "90%", sm: "50%", md: "50%" },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              Call Your Adviser
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              boxSizing: "border-box",
              minHeight: "250px",
            }}
          >
            <img
              style={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%) scaleX(-1)",
                maxWidth: "100%",
                maxHeight: "260px",
                objectFit: "contain",
              }}
              src="images/lady-image.png"
              alt="Lady Image"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
