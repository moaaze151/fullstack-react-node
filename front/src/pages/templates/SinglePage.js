import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  about: {
    padding: "35px 0",
  },
});

export default function SinglePage(props) {
  const { title, content } = props;
  const classes = useStyles(props);
  return (
    <Box className={classes.about}  sx={{ height: "79vh" }}>
      <Container maxWidth="xl">
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {content}
        </Typography>
      </Container>
    </Box>
  );
}
