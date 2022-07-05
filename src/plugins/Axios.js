import axios from "axios";
let baseURLs = "http://localhost:8080";
if (window.location.hostname === "localhost")
  baseURLs = "http://localhost:8080";
else baseURLs = window.Location.origin;
axios.defaults.baseURL = baseURLs;
axios.defaults.headers.common["Authorization"] = "Bearer " + global.token;
axios.defaults.validateStatus = (status) => status >= 200 && status < 399;

axios.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    let accessToken = global.token;
    let isLoggedIn = accessToken ? true : false;
    if (isLoggedIn === true) {
      config.headers.common["Authorization"] = "Bearer " + accessToken;
      config.headers.common["userId"] = global.userId;
      //   config.headers.common["csrf-token"] = window.csrf;
      return config;
    } else {
      if (isLoggedIn === false) {
      }
      return config;
    }
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response) {
    } else {
      if (error.response.status === 401) {
        window.location.href = "/login";
        localStorage.clear("token");
        localStorage.clear("user");
        return Promise.reject(error);
      }

      // if (error.response.status === 404 && store.getters.isLoggedIn) {
      //   store.dispatch("handleNotFound");
      // }
      // if (
      //   error.response.data.error.code === 1079 ||
      //   error.response.data.error.code === 1072 ||
      //   error.response.data.error.code === 1075
      // ) {
      //   if (store.getters.isLoggedIn) {
      //     store.dispatch("destroySession");
      //   }
      //   Vue.prototype.$notify({
      //     group: "errors",
      //     type: "error",
      //     title: "laaaaaaaa",
      //     text: "achhada",
      //   });
      // }
    }
    return Promise.reject(error);
  }
);

export default axios;
