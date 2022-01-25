import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    padding: "25px",
    background: "#666",
    maxWidth: "90%",
    margin: "5px auto 15px",
    borderRadius: "7px",
    color: "#fff",
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles(props);
  return (
    <>
      <Grid container className={classes.root} columSpacing={2} elevation={6}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" component="h3">
            Post title goes here
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography sx={{mb:1}} variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ut
            quidem nisi? Nihil deserunt cum sequi, animi modi in corporis neque
            voluptatum, numquam, temporibus quia necessitatibus velit ea hic?
            Laudantium!
          </Typography>
          <Button color="secondary" variant="contained">
            Read More
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
