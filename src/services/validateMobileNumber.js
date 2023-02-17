export const validateMobileNumber = (mobileNumber) => {
  const pattern = "^09[0|1|2|3|4|9][0-9]{8}$";
  let reg = new RegExp(pattern);
  return reg.test(mobileNumber);
};
