import AddPostComp from "../../components/forms/AddPostComp";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Box } from "@mui/material";

export default function AddPost() {
  return (
    <Box sx={{height:"85vh"}}>
      <Container maxWidth="xl">
        <Paper sx={{ m: "15px auto 0", p: 2, maxWidth: "80%" }}>
          <Typography variant="h4" component="h1">
            Add Post
          </Typography>
          <Typography variant="body1">
            Add your new post using form blew
          </Typography>
          <Divider sx={{ my: 3 }} />
          <AddPostComp />
        </Paper>
      </Container>
    </Box>
  );
}
