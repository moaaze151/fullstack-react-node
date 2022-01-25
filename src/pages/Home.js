import Posts from "../components/post/Posts";
import FeaturedPost from "../components/post/Featured";
import Slide from "../layout/Slide";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";


const useStyles = makeStyles({
  home: {
    padding: "35px 0",
  },
  main: {
    // background: "#f5f5f5",
    padding: "15px",
  },
  slide: {
    // background: "#f5f5f5",
    padding: "10px",
  },
});
function Home(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.home}>
      <Container maxWidth="xl">
        <FeaturedPost />
        <Grid
          container
          justifyContent="space-between"
          direction={matches ? "column" : "row"}
        >
          <Grid className={classes.main} item xs={7}>
            <Typography sx={{ mb: "15px" }} variant="h4" component="h4">
              Blog Posts
            </Typography>
            <Posts />
          </Grid>

          <Grid className={classes.slide} item xs={4}>
            <Slide />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
