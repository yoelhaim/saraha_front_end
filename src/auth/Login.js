import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginAccount = async (e) => {
    e.preventDefault();
    try {
      if (email === "") alert("error email");
      else if (password === "") alert("error password");
      else {
        const check_login = await axios.post("/auth/login", {
          email: email,
          password: password,
        });
        if (check_login) {
          console.log(check_login);
        } else console.log("error login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-40">
      <div className="w-full max-w-md mx-auto  justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10">
        <h1 className="text-lg">
          <i className="mdi mdi-account-supervisor-circle-outline"></i> تسجيل
          الدخول{" "}
        </h1>
        <form onSubmit={loginAccount}>
          <div className="w-full mt-5">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              البريد الإلكتروني :
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="البريد الإلكتروني"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="w-full mt-5">
            <label
              htmlFor="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              كلمة السر :
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="كلمة السر"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-3 mx-auto  justify-center text-center">
            <button
              type="submit"
              className="w-2/1 text-white bg-green-700 hover:bg-green-800 focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              تسجيل الدخول
            </button>
          </div>
          <div className="mt-3 mx-auto  justify-center text-center">
            <button
              type="button"
              className="w-2/1 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              <i className="mdi mdi-facebook"></i>
              تسجيل الدخول بفيسبوك
            </button>
          </div>
        </form>
        <p className="mt-3">
          {" "}
          إن لم يكن لديك أي حساب{" "}
          <Link to="/register" className="text-blue-500">
            {" "}
            انشئ حسابك{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
