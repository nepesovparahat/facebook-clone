const signupactiontype = {
  ADD: "ADD",
};
const addSignUpAction = (res) => {
  return { type: signupactiontype.ADD, payload: res };
};

export { signupactiontype, addSignUpAction };
