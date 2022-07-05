import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  document.title = "Register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [fname, setfname] = useState();
  const [lname, setLname] = useState();
  const navigete = useNavigate();
  const createAccount = async (e) => {
    e.preventDefault();

    try {
      if (fname === "")
        toast.warn("error first name required", global.configTaost);
      else if (lname === "")
        toast.warn("last name required", global.configTaost);
      else if (email === "")
        toast.warn("error email required", global.configTaost);
      else if (password === "")
        toast.warn("error password required", global.configTaost);
      else {
        const createAccount = await axios.post("/auth/create", {
          firstName: fname,
          lastName: lname,
          email: email,
          password: password,
        });
        if (createAccount) {
          toast.success("success regestred new account", global.configTaost);

          navigete(`/login`);
        }
      }
    } catch ({ response }) {
      toast.error(response?.data.message, global.configTaost);
    }
  };
  return (
    <div className="mt-9 md:mt-40 m-4 md:m-0">
      <div className="w-full max-w-md mx-auto  justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10">
        <h1 className="text-lg">
          <i className="mdi mdi-account-supervisor-circle-outline"></i>انشئ
          حسابك
        </h1>
        <form onSubmit={createAccount}>
          <div className="w-full mt-5">
            <label
              htmlFor="fname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              الإسم الأول :
            </label>
            <input
              type="text"
              id="fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="الإسم الأول"
              required
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
          </div>

          <div className="w-full mt-5">
            <label
              htmlFor="lname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              الإسم العائلي :
            </label>
            <input
              type="text"
              id="lname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="الإسم العائلي"
              required
              onChange={(e) => {
                setLname(e.target.value);
              }}
            />
          </div>
          <div className="w-full mt-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              البريد الإلكتروني :
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              placeholder="البريد الإلكتروني"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="w-full mt-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              انشئ حسابك{" "}
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
          إإن كان لديك{" "}
          <Link to="/login" className="text-blue-500">
            {" "}
            سجل دخولك{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
