import UpdatePostComp from "../../components/forms/UpdatePostComp";
import requests from "../../api/posts/requests";
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
    async function fetchPosts(id) {
      const data = await requests.getOne(id);
      const { myPost: fetchedPost } = data;
      setPost(fetchedPost);
    }
    fetchPosts(id);
  }, [id]);
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
          {post && <UpdatePostComp post={post} id={id} />}
        </Paper>
      </Container>
    </Box>
  );
}
