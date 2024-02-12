import { Box, Button, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#0F3552",
        pl: { xs: "30px", sm: "50px", md: "90px", lg: "150px" },
        pr: { xs: "30px", sm: "50px", md: "80px", lg: "130px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box
            sx={{
              color: "white",
              pt: { xs: "50px", sm: "50px", md: "100px" },
              pb: { sx: "50px", sm: "50px", md: "100px" },
              textAlign: { xs: "center", md: "left" },
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
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              textAlign: "center",
              pl: { xs: "20%", sm: "30%", md: "10%", lg: "20%" },
              pr: { xs: "20%", sm: "30%", md: "10%", lg: "20%" },
            }}
          >
            <Box></Box>
            <img
              style={{
                width: "100%",
                transform: "scaleX(-1)",
                marginTop: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src="images/lady-image.png"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
