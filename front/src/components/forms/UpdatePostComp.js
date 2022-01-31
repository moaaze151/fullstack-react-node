import { useState, useEffect, useRef } from "react";
import Validate from "../../utilities/validation/post";
import requests from "../../api/posts/requests";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";

export default function UpdatePostComp(props) {
  const { post, id } = props;
  const [values, setValues] = useState({
    title: post ? post.title : "",
    body: post ? post.body : "",
  });
  const [errors, setErrors] = useState({});
  const [vd, setVd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotif] = useState({
    show: false,
    type: "error",
    text: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const title = values.title ? values.title.trim() : values.title;
    const body = values.body ? values.body.trim() : values.body;
    const validationErrors = Validate(title, body);
    setErrors(validationErrors);
    validationErrors.title === "" && validationErrors.body === ""
      ? setVd(true)
      : setVd(false);
  };
  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();

    const sentData = async (id, val) => {
      const results = await requests.updateOne(id, val);
      console.log("results", results);
      const { response, data } = results;
      console.log("res", response);
      console.log("data", data);
      if (response.ok) {
        setNotif({ show: true, type: "success", text: "It's updated" });
      } else if (data) {
        const err = data.err || {};
        const errName = err.name;
        if (errName === "validation error") {
          setNotif({ show: true, type: "error", text: err.message });
        }
        console.log(data);
      } else {
        setNotif({ show: true, type: "error", text: "unknown error" });
      }
    };
    try {
      if (submitted) {
        if (vd) {
          sentData(id, values);
          setVd(false);
        }
        setSubmitted(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, [submitted]);

  return (
    <form onSubmit={handleSubmit}>
      {notification.show && (
        <Alert severity={notification.type} variant="filled">
          {notification.text}
        </Alert>
      )}
      <TextField
        sx={{ mt: 2 }}
        color="secondary"
        id="outlined-basic"
        label="post title"
        variant="outlined"
        fullWidth
        name="title"
        inputRef={inputEl}
        value={values.title}
        onChange={handleInputs}
        error={!!errors.title}
        helperText={!!errors.title && errors.title}
        // onKeyDown={onFirstInputKey}
      />
      <TextField
        color="secondary"
        id="outlined-basic"
        label="post title"
        variant="outlined"
        multiline
        rows={6}
        fullWidth
        sx={{ my: 1 }}
        name="body"
        value={values.body}
        onChange={handleInputs}
        error={!!errors.body}
        helperText={errors.body && errors.body}
        // inputRef={areaEl}
        // onKeyDown={onSecInputKey}
      />
      <Button
        // ref={btnEL}
        color="secondary"
        fullWidth
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
