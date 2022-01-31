const messages = {
  required: "This field is required",
  minLength: (min) => `This field must contain more than ${min} chars`,
  maxLength: (max) => `This field must contain less than ${max} chars`,
};

const rules = {
  required: (val) => (val ? "pass" : messages.required),
  minLength: (val, min) => val.length < min ? messages.minLength(min) : "pass",
  maxLength: (val, max) => val.length > max ? messages.maxLength(max) : "pass",
};

const validator = {
  body: (val, min, max) => {
    return [
      rules.required(val),
      rules.minLength(val, min),
      rules.maxLength(val, max),
    ];
  },
  title: (val, min, max) => {
    return [
      rules.required(val),
      rules.minLength(val, min),
      rules.maxLength(val, max),
    ];
  },
};

const Validate = (title, body) => {
  const errors = { title: "", body: "" };
  errors.title = validator.title(title, 7, 70).find((y) => y !== "pass") || "";
  errors.body = validator.body(body, 7, 2000).find((y) => y !== "pass") || "";

  return { ...errors };
};

export default Validate;
