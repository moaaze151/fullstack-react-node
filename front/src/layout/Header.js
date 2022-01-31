import Switch from "../components/shared/Switch";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MUILink from "@mui/material/Link";
import WebIcon from "@mui/icons-material/Web";

const useStyles = makeStyles({
  styleLink: {
    color: "#fff",
    textDecoration: "none",
  },
});

export default function Header(props) {
  const { title, checked, onChange } = props;

  const styleHeader = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar color="secondary" position="static" sx={{ py: "0.4rem" }}>
        {/* <<AppBar color="secondary"> */}
        <Toolbar>
          <Container maxWidth="xl" sx={{}}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                container
                alignItems="center"
                justifyContent={matches ? "center" : "space-between"}
                item
                xs={12}
                sm="auto"
              >
                <Grid item xs="auto">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 0.5 }}
                  >
                    <WebIcon sx={{ mb: "4px" }} />
                  </IconButton>
                </Grid>
                <Grid item xs="auto">
                  <Typography
                    variant="h6"
                    component="h1"
                    gutterBottom
                    sx={{ flexGrow: 1 }}
                  >
                    {title}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm="auto"
                justifyContent={matches ? "center" : "space-between"}
              >
                <MUILink
                  component={Link}
                  to="/"
                  className={styleHeader.styleLink}
                >
                  <Button color="inherit">HOME</Button>
                </MUILink>
                <MUILink
                  component={Link}
                  to="/add-post"
                  className={styleHeader.styleLink}
                >
                  <Button color="inherit">ADD POST</Button>
                </MUILink>
                <MUILink
                  component={Link}
                  to="/about"
                  className={styleHeader.styleLink}
                >
                  <Button color="inherit">ABOUT</Button>
                </MUILink>
                <Switch checked={checked} onChange={onChange} />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

Header.defaultProps = {
  title: "My website",
  text: "this is my text",
};
