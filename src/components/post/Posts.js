// import posts from "./data";
import Post from "./Post";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Posts() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(3);

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/?_page=${page}`;
    async function fetchPosts() {
      const response = await fetch(URL);
      const data = await response.json();
      setPosts(data);
      console.log("Posts: ", data);
    }
    setTimeout(fetchPosts, 250);
  }, [page]);

  return (
    <>
      <Grid container spacing={2}>
        {posts ? (
          posts.map((post) => {
            const { id, title, body } = post;
            return (
              <Grid item key={id} xs={12} md={6} xl={4}>
                <Post
                  title={title.slice(0, 18)}
                  text={body.slice(0, 70)}
                  id={id}
                  shownBtn="true"
                />
              </Grid>
            );
          })
        ) : (
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <CircularProgress size={75} color="secondary" />
          </Box>
        )}
      </Grid>
      <Stack spacing={2} sx={{ mt: 5 }}>
        <Pagination
          defaultPage={page}
          count={10}
          color="secondary"
          onChange={(e, val) => setPage(val)}
        />
      </Stack>
    </>
  );
}
export default Posts;
