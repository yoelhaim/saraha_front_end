import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function SendMessage() {
  let { id } = useParams();
  const [msg, setMsg] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const sendData = await axios.post(`/msg/send`, {
        userId: id,
        message_content: msg,
      });
      if (sendData)
        toast.success("successfully send message private", global.configToast);
      document.getElementById("message").value = "";
    } catch ({ response }) {
      toast.error(response?.data.message, global.configToast);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto  justify-center p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10">
      <form onSubmit={sendMessage}>
        {id}

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Leave a comment..."
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <div className="mt-3 mx-auto  justify-center text-center">
          <button
            type="submit"
            className="w-2/1 text-white bg-blue-700 hover:bg-blue-800 focus:outline  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
}
export default SendMessage;
