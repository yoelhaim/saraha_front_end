import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import IconLoading from "../assets/icons/laoding";

function SendMessage() {
  let { id } = useParams();
  const [msg, setMsg] = useState("");
  const [loading, setLaoding] = useState(false);
  const sendMessage = async (e) => {
    e.preventDefault();
    setLaoding(true);
    try {
      const sendData = await axios.post(`/msg/send`, {
        userId: id,
        message_content: msg,
      });
      if (sendData)
        toast.success("successfully send message private", global.configToast);
      document.getElementById("message").value = "";
      setLaoding(false);
    } catch ({ response }) {
      toast.error(response?.data.message, global.configToast);
      setLaoding(false);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto  justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10">
      <form onSubmit={sendMessage}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          إكتب رسالتك السرية :
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="إكتب رسالتك السرية هنا"
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="mt-3 mx-auto  justify-center text-center">
          <button
            type="submit"
            className="w-2/1 text-white bg-blue-700 hover:bg-blue-800 focus:outline  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            {loading ? <IconLoading /> : null}
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
}
export default SendMessage;
