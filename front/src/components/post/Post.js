import { useEffect, useState } from "react";
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
import requests from "../../api/posts/requests";

function Post(props) {
  const [showIcon, setShowIcon] = useState(false);
  const [addIcon, setAddIcon] = useState(true);
  const [remIcon, setRemIcon] = useState(false);
  const [open, setOpen] = useState(false);
  const [delTriggered, setDelTriggered] = useState(false);

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
    setDelTriggered(true);
  };
  useEffect(() => {
    const delItem = async (id) => {
      const data = await requests.deleteOne(id);
      console.log(data);
      window.location.reload();
    };

    if (delTriggered) {
      delItem(id);
    }
  }, [id, delTriggered]);
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
            onClick={() => showIcons()}
          >
            <AddIcon />
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
            onClick={() => showIcons()}
          >
            <RemoveIcon />
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
              onClick={() => navigate(`update-post/${id}`)}
            >
              <EditIcon  />
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
              onClick={handleClickOpen} 
            >
              <DeleteIcon />
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
