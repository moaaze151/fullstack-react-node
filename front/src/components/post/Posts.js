// import posts from "./data";
import Post from "./Post";
import requests from "../../api/posts/requests"
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Posts() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(3);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    // const URL = `posts/?page=${page}`;
    async function fetchPosts(page) {
      const data = await requests.getAll(page); 
      console.log("Posts: ", data);
      const { posts, pagesCount } = data;
      setPosts(posts);
      setNumOfPages(pagesCount);
    }
  fetchPosts(page)
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
          count={numOfPages}
          color="secondary"
          onChange={(e, val) => setPage(val)}
        />
      </Stack>
    </>
  );
}
export default Posts;
