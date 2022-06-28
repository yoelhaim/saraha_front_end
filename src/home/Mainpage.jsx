import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function MainPage() {
  document.title = "home";
  const [post, setPost] = useState([]);
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
  const displayPost = post.map((element) => {
    return (
      <div
        key={element._id}
        className=" p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-10"
      >
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <i className="mdi mdi-account mdi-36px"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              غير معروف
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              email@windster.com
            </p>
          </div>
        </div>
        <p>{element.message_content}</p>
      </div>
    );
  });
  console.log(post);
  return (
    <div>
      <div className="w-full max-w-md mx-auto  justify-center  ma-10">
        {displayPost}
      </div>
    </div>
  );
}
export default MainPage;
