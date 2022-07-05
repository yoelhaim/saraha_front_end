import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-300 border-gray-200 px-2  py-2.5">
      <div className=" flex flex-wrap justify-between items-center ">
        <Link to="/home" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            الصراحة
          </span>
        </Link>
        <div className=" w-full md:block md:w-auto sizefont">
          <ul className="flex mt-4 flex-row space-x-8 md:mt-0 font-sm">
            <li>
              <Link
                to=""
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                رسائلي
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="mr-4 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                الإعدادات
              </Link>
            </li>

            <li>
              <button
                onClick={global.logOut}
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                تسجيل الخروج
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
