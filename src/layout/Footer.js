import { Typography } from "@mui/material";
import { Box } from "@mui/material";
function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 1,
        bottom: 0,
        width: "100%",
        bgcolor: 'secondary.main',
        color:"white"
      }}
    >
      <Typography variant="body1" component="">
        copyright 2022 - Mo3azDV
      </Typography>
    </Box>
  );
}

export default Footer;
