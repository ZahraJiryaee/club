function setToken(tokenObj) {
  localStorage.setItem("accessToken", tokenObj.accessToken);
  localStorage.setItem("refreshToken", tokenObj.refreshToken);
}
function getAccessToken() {
  return localStorage.getItem("accessToken");
}
function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
function clearToken() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

const localstorageService = {
  setToken: setToken,
  getAccessToken: getAccessToken,
  getRefreshToken: getRefreshToken,
  clearToken: clearToken,
};

export default localstorageService;
