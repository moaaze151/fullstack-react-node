import Slide from "../../layout/Slide";
import Post from "../../components/post/Post";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  home: {
    padding: "35px 0",
    height:"79vh"
  },
  main: {
    padding: "15px",
  },
  slide: {
    padding: "10px",
  },
});

function SinglePost(props) {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    async function fetchPosts() {
      const response = await fetch(URL);
      const singlePost = await response.json();
      setPost(singlePost);
    }
    setTimeout(fetchPosts, 1000);
  }, [id]);
  console.log(post);

  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className={classes.home}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          direction={matches ? "column" : "row"}
        >
          <Grid className={classes.main} item xs={7}>
            {post ? (
              <Post
                title={post.title}
                text={post.body}
                id={id}
              />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress size={75} color="secondary" />
              </Box>
            )}
          </Grid>

          <Grid className={classes.slide} item xs={4}>
            <Slide />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SinglePost;
