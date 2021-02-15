const signUpActiontype = {
    PRINT: "PRINT_SignUP",
  };
  
  const signUpAction = (res) => {
    return { type: signUpActiontype.PRINT, payload: res };
  };
  
  
  
  export { signUpActiontype, signUpAction };