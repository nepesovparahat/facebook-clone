const signUpActiontype = {
    PRINT: "PRINT",
  };
  
  const signUpAction = (res) => {
    return { type: signUpActiontype.PRINT, payload: res };
  };
  
  
  
  export { signUpActiontype, signUpAction };