import UpdatePostComp from "../../components/forms/UpdatePostComp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";

export default function UpdatePost() {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    async function fetchPosts() {
      const response = await fetch(URL);
      const singlePost = await response.json();
      setPost(singlePost);
    }
    fetchPosts();
  }, [id]);
  console.log(id);
  return (
    <Box sx={{ height: "85vh" }}>
      <Container maxWidth="xl">
        <Paper sx={{ m: "15px auto 0", p: 2, maxWidth: "80%" }}>
          <Typography variant="h4" component="h1">
            Update Post ({id})
          </Typography>
          <Typography variant="body1">
            Modify your old post using form blew
          </Typography>
          <Divider sx={{ my: 3 }} />
          {post && <UpdatePostComp post={post} />}
        </Paper>
      </Container>
    </Box>
  );
}
