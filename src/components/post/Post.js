import * as React from "react";
import { Link } from "react-router-dom";
import Popup from "../shared/Popup";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function Post(props) {
  const [showIcon, setShowIcon] = React.useState(false);
  const [addIcon, setAddIcon] = React.useState(true);
  const [remIcon, setRemIcon] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  
  const { title, text, id, shownBtn } = props;

  function showIcons() {
    setShowIcon(!showIcon);
    setAddIcon(!addIcon);
    setRemIcon(!remIcon);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          bgcolor: "primary",
          position: "relative",
          py: "15px",
          textAlign: "center",
        }}
        elevation={4}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {text}
          </Typography>
          {shownBtn && (
            <Button
              onClick={() => navigate(`posts/${id}`)}
              sx={{ mt: 2 }}
              color="secondary"
              variant="contained"
              fullWidth
            >
              More...
            </Button>
          )}
        </CardContent>
        {/* show icons */}
        {addIcon && (
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="primary"
            sx={{
              position: "absolute",
              top: "-7px",
              left: 0,
              cursor: "pointer",
            }}
          >
            <AddIcon onClick={() => showIcons()} />
          </IconButton>
        )}
        {/* hide icons */}
        {remIcon && (
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            color="primary"
            sx={{
              position: "absolute",
              top: "-7px",
              left: 0,
              cursor: "pointer",
            }}
          >
            <RemoveIcon onClick={() => showIcons()} />
          </IconButton>
        )}
        {showIcon && (
          <>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="secondary"
              sx={{
                position: "absolute",
                top: "-7px",
                right: 50,
                cursor: "pointer",
              }}
            >
              <EditIcon onClick={() => navigate(`update-post/${id}`)} />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              color="error"
              sx={{
                position: "absolute",
                top: "-7px",
                right: 2,
                cursor: "pointer",
              }}
            >
              <DeleteIcon onClick={handleClickOpen} />
            </IconButton>
          </>
        )}
      </Card>
      <Popup
        open={open}
        handleClose={handleClose}
        title="Delete an Item"
        text="Are you sure you want delete it ?"
      />
    </>
  );
}

export default Post;
