import MUISwitch from "@mui/material/Switch";

function Switch(props) {
  const { checked, onChange } = props;

  return (
    <MUISwitch
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
      color="secondary"
    />
  );
}

export default Switch;
