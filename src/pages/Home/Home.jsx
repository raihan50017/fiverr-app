import { Box, Button, Grid, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#0F3552",
        pl: { xs: "30px", md: "200px" },
        pr: { xs: "30px", md: "200px" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={9}>
          <Box
            sx={{
              color: "white",
              pt: { xs: "50px", md: "100px" },
              pb: { sx: "50px", md: "100px" },
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
              sx={{ mt: "30px", width: { xs: "90%", md: "50%" } }}
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
                width: { xs: "90%", md: "50%" },
              }}
              variant="outlined"
            >
              Call Your Adviser
            </Button>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              pl: { xs: "10px", md: "0px" },
              pr: { xs: "10px", md: "0px" },
            }}
          >
            <img
              style={{
                width: "100%",
                transform: "scaleX(-1)",
                marginTop: "auto",
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
