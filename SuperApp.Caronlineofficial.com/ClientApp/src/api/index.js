// import axios from "axios"
import * as axios from "axios";
import toast from "react-hot-toast";
export default function http() {
  const _token = localStorage.getItem("token");

  const instance = axios.create({
    // baseURL: "http://192.168.0.233:5000/api/",
    baseURL:
      process.env.NODE_ENV == "development"
        ? "https://localhost:7283/api/" :
        "https://caronlineOfficial.com/api/",
    // :""
    // "https://mashinto.com/api/",
    // "https://mashinto.com/api/",
    // baseURL: "https://car.caronlineofficial.com/api/",
    // baseURL: "https://app.caronlineofficial.com/api/",
  });

  // console.log("http base " + process.env.BASE_URL_API);

  // set headers
  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  instance.defaults.headers.common["Accept"] = "application/json";
  instance.defaults.headers.common["Access-Control-Allow-Origin"] =
    "application/x-www-form-urlencoded";
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";

  /* --------------------- axios instance ----------------------- */

  // Add a request interceptor
  instance.interceptors.request.use(
    async function (config) {
      // Set Authentication Before Requesting

      if (_token) {
        config.headers.Authorization = "Bearer " + _token;
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      if (response?.data?.status != true) {
        errors_handler(response);
      }
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  let error_display = (data, statusText) => {
    // toast notification
    if (!data) return;
    if (data?.errors) {
      toast.error(data?.errors[Object.keys(data.errors)[0]], {});
    } else {
      toast.error(data.message);
    }
  };
  let success_display = (status) => {
    // toast notification
    if (!status) return;
    if (status.message) {
      status.isSuccess
        ? toast.success(status.message)
        : toast.error(status.message);
    }
  };

  /* --------------------- axios instance errors ----------------------- */
  function errors_handler(error) {
    if (error?.data?.message && error?.data.success == false) {
      // error_display(error, error?.data?.message);
      return;
    }

    if (!error && !error.response && !error.response.data) {
      return;
    }
    let current_error = error?.response?.data;
    let current_error_status = error?.response?.status;
    let current_error_message = current_error?.message;

    // eslint-disable-next-line default-case
    switch (current_error_status) {
      case 200:
        //bad request
        success_display(current_error, current_error_message);
        break;
      case 400:
        //bad request
        error_display(current_error, current_error_message);
        break;
      case 401:
        //unauthenticate

        localStorage.removeItem("token");
        // window.location="/register"
        // RootNavigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
      case 403:
        //unauthenticate
        // RootNavigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
      case 404:
        //unauthenticate
        // RootNavigation.navigate("Start");
        error_display(current_error, current_error_message);
        window.location = "/404";
        break;
      case 410:
        //unauthenticate
        error_display(current_error, current_error_message);
        break;
      case 422:
        error_display(current_error, current_error_message);
        break;
      case 500:
        //server error
        // if (typeof window !== "undefined") AsyncStorage.removeItem("token");
        // if (typeof window !== "undefined") navigation.navigate("Start");
        error_display(current_error, current_error_message);
        break;
    }
  }

  /* --------------------- axios instance ----------------------- */

  return {
    // ********
    // public api
    // ********
    Login: (callback, data, errCallback) => {
      return instance
        .post("auth/Login", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Register: (callback, data, errCallback) => {
      return instance
        .post("auth/Register", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResetPassword: (callback, data, errCallback) => {
      return instance
        .post("auth/ResetPassword", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    VerifyResetPassword: (callback, data, errCallback) => {
      return instance
        .post("auth/VerifyResetPassword", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Verify: (callback, data, errCallback) => {
      return instance
        .post("auth/Verify", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetTestToken: (callback, data, errCallback) => {
      return instance
        .post("auth/GetTestToken", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    CompleteProfile: (callback, data, errCallback) => {
      return instance
        .post("auth/CompleteProfile", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    SendCode: (callback, data, errCallback) => {
      return instance
        .post("auth/SendCode", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetUserDashboard: (callback, data, errCallback) => {
      return instance
        .get("auth/GetUserDashboard", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    // **********
    // request for car
    // ***********
    RequestBuyCar: (callback, data, errCallback) => {
      return instance
        .post("RequestForCar/RequestBuyCar", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    RequestSellCar: (callback, data, errCallback) => {
      return instance
        .post("RequestForCar/RequestSellCar", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    UserGetActiveStories: (callback, data, errCallback) => {
      return instance
        .get("Story/GetActiveStories", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    // **********
    // admin apis for stori management
    // ***********
    GetActiveStories: (callback, data, errCallback) => {
      return instance
        .get("StoriesManagement/GetActiveStories", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetNotActiveStories: (callback, data, errCallback) => {
      return instance
        .get("StoriesManagement/GetNotActiveStories", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    AddNewStory: (callback, data, errCallback) => {
      return instance
        .post("StoriesManagement/AddNewStory", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Delete: (callback, data, errCallback) => {
      return instance
        .post("StoriesManagement/Delete?id=" + data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    // **********
    // check has story
    // ***********
    CheckStory: (callback, data, errCallback) => {
      return instance
        .get("story/CheckHasStory" , data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },

  };
}