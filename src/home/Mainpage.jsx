import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TimeAgo from "timeago-react";

function MainPage() {
  document.title = "home";
  const urlShare = `${global.baseURLs}/send/${global._id}`;
  const [post, setPost] = useState([]);
  const removepost = async (_id, index) => {
    try {
      const removed = await axios.put(`/msg//delete/${_id}`);
      if (removed) {
        toast.success(removed.data.message, global.configTaost);
        getpost();
      }
    } catch ({ response }) {
      toast.error(response?.data.message, global.configTaost);
    }
  };
  const getpost = async () => {
    try {
      const getPosts = await axios.get(
        `/msg/get/${global._id}?userId=${global.userId}`,
        {
          userId: global.userId,
        }
      );
      setPost(getPosts.data);
    } catch (error) {
      toast.error("error get data", global.configTaost);
    }
  };
  useEffect(() => {
    getpost();
  }, []);
  const displayPost = post.map((element, index) => {
    return (
      <div
        key={index}
        className=" p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <i className="mdi mdi-account mdi-36px"></i>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              غير معروف
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              <TimeAgo datetime={element.createAt} locale="ar" />
            </p>
          </div>
        </div>
        <p>{element.message_content}</p>
        <div className="">
          <p className="float-left">
            <button onClick={() => removepost(element._id, index)}>
              {" "}
              <i className="mdi mdi-delete mdi-24px text-red-500"></i>
            </button>
          </p>
        </div>
        <div>-</div>
      </div>
    );
  });

  return (
    <div className="mb-10">
      <div className="w-full max-w-md mx-auto  justify-center  ma-10">
        <div className="pa-5 mt-10">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={`${urlShare}`}
          />
        </div>
        {displayPost}
      </div>
    </div>
  );
}
export default MainPage;
