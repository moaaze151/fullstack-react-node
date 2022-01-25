import { useState, useEffect, useRef } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Validate from "../../utilities/validation/post";

export default function AddPostComp(props) {
  const [values, setValues] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({});

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = values.title ? values.title.trim() : values.title;
    const body = values.body ? values.body.trim() : values.body;
    const validationErrors = Validate(title, body);
    setErrors(validationErrors);
  };
  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  // const areaEl = useRef();
  // const btnEL = useRef();
  // function onFirstInputKey(e) {
  //   if (e.key === "Enter" && values.title.trim() !== "") {
  //     areaEl.current.focus();
  //   }
  // }
  // function onSecInputKey(e) {
  //   if (e.key === "Enter" && !errors.title) {
  //     btnEL.current.focus();
  //   }
  // }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
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
