import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

function Slide(props) {
  return (
    <>
      <Card sx={{ mb: "10px" }} raised>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            About
          </Typography>
          <Typography variant="body1">
            {" "}
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            iure rem maiores temporibus obcaecati quidem consequatur nobis nihil
            eum tenetur neque, itaque doloribus. Velit maiores, commodi possimus
            itaque quas minima?";
          </Typography>
        </CardContent>
      </Card>

      <Card raised>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            Categories
          </Typography>
          <Paper>
            <MenuList>
              <MenuItem>css</MenuItem>
              <MenuItem>Html</MenuItem>
              <MenuItem>React</MenuItem>
              <MenuItem>Node</MenuItem>
            </MenuList>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
}

export default Slide;
