// import axios from "axios"
import * as axios from "axios";
import toast from "react-hot-toast";
export default function http() {
  const _token = localStorage.getItem("token");

  const instance = axios.create({
    baseURL: "https://academy.caronlineofficial.com/api/",
    // baseURL:
    // process.env.NODE_ENV == "development"
    //   ? "http://127.0.0.1:5000/api/"
    //   : "https://academy.caronlineofficial.com/api/",
    // baseURL: "https://academy.caronlineofficial.com/api/",
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
    Register: (callback, data, errCallback) => {
      return instance
        .post("Account/Register", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Login: (callback, data, errCallback) => {
      return instance
        .post("Account/login", data)
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
        .post("Account/VerifyUser", data)
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
        .post("Account/ResetPassword", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResendCode: (callback, data, errCallback) => {
      return instance
        .post("Account/ResendCode", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResetPasswordEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/ResetPasswordEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResetPasswordVerifyEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/ResetPasswordVerifyEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResetPasswordVerify: (callback, data, errCallback) => {
      return instance
        .post("Account/ResetPasswordVerify", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    RegisterWithEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/RegisterWithEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    RegisterWithEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/RegisterWithEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    UpdateProfile: (callback, data, errCallback) => {
      return instance
        .post("user/UpdateProfile", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    VerifyEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/VerifyEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    LoginWithEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/LoginWithEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ResendCodeEmail: (callback, data, errCallback) => {
      return instance
        .post("Account/ResendCodeEmail", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetCategories: (callback, data, errCallback) => {
      return instance
        .get("Education/GetCategories", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetAllVideos: (callback, data, errCallback) => {
      return instance
        .get("Education/GetAllVideos", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },

    GetAllPackage: (callback, data, errCallback) => {
      return instance
        .get("user/GetAllPackage", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetSetting: (callback, data, errCallback) => {
      return instance
        .get("user/GetSetting", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    /// auth
    // ********
    // user
    // ********
    GetCurrentUser: (callback, data, errCallback) => {
      return instance
        .post("User/GetCurrentUser", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    ChargeAccount: (callback, data, errCallback) => {
      return instance
        .post("Education/BuyEducation", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetDetailVideo: (callback, data, errCallback) => {
      return instance
        .post("Education/GetDetailVideo", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    BuyEducation: (callback, data, errCallback) => {
      return instance
        .post("Order/BuyEducation", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetBoughtEducations: (callback, data, errCallback) => {
      return instance
        .get("User/GetBoughtEducations", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    /// charge Account
    ChargeAccount: (callback, data, errCallback) => {
      return instance
        .post("Order/ChargeAccount", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    /// get signals
    GetSignals: (callback, data, errCallback) => {
      return instance
        .get("SignalClub/GetSignals", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    AddNotificationToken: (callback, data, errCallback) => {
      return instance
        .post("user/AddNotificationToken", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    SendReport: (callback, data, errCallback) => {
      return instance
        .post("user/SendReport", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    StockMarketPrice: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/StockMarketPrice", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    OTCPrice: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/OTCPrice", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    CommodityExchange: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/CommodityExchange", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    userOrderEducation: (callback, data, errCallback) => {
      return instance
        .get("user/GetOrderedEducations", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    //  public api
    Home: (callback, data, errCallback) => {
      return instance
        .get("PublicApi/Home", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    VideoTvCategory: (callback, data, errCallback) => {
      return instance
        .get("PublicApi/VideoTvCategory", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    PodCastCategory: (callback, data, errCallback) => {
      return instance
        .get("PublicApi/PodCastCategory", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetAllVideoTv: (callback, data, errCallback) => {
      return instance
        .get("PublicApi/GetAllVideoTv", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetAllPodcast: (callback, data, errCallback) => {
      return instance
        .get("PublicApi/GetAllPodcast", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },

    // price watch
    GoldPrice: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/GetGOldAndCoinPrice", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Currency: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/Currency", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    DiffCurrency: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/DiffCurrency", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Commodity: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/Commodity", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Basemetal: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/Basemetal", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    Mortgageloan: (callback, data, errCallback) => {
      return instance
        .get("PriceWatch/Mortgageloan", data)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetNews: (callback, data) => {
      return instance
        .get(`PublicApi/GetNews`, { params: data })
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-undef
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
    GetNewsPaper: (callback, id, errCallback) => {
      return instance
        .get(`/Jaar/GetData?id=${id}`)
        .then((data) => {
          callback(data);
          success_display(data.data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-undef
          if (errCallback) errCallback(err);
          errors_handler(err);
        });
    },
  };
}
