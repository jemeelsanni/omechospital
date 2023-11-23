import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Blogauth from "./Blogauth";
import BlogList from "./BlogList";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

const Blogsec = () => {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPost, setNewPost] = useState("");
  const [ImagePath, setImagePath] = useState("");
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Image, setImage] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };

  const getPosts = async () => {
    try {
      const response = await axios.get("https://omechospital.com/api/Blog");
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmitPost = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", Image);
      formData.append("upload_preset", "gr0fcwk3");
      axios
        .post(
          "https://api.cloudinary.com/v1_1/daak7spdb/image/upload",
          formData
        )
        .then((response) => {
          setImagePath(response.data.url);
        });
      const data = await axios
        .post("https://omechospital.com/api/Blog", {
          BlogTitle: newTitle,
          Status: newDescription,
          Post: newPost,
          ImagePath,
        })
        .then((response) => {
          //conosle.log(response);
          setLoading(false);
          if (response.status === 200) {
            toast.success("Added successfully");
          }
        });
    } catch (error) {
      toast.error(error.response.data.title);
      setLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  // const handleSubmitPost = async () => {
  //   console.log("shjs");
  //   setLoading(true);
  //   const newPostId = response.data.id;
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", Image);
  //     formData.append("upload_preset", "gr0fcwk3");
  //     axios
  //       .post(
  //         `https://api.cloudinary.com/v1_1/daak7spdb/image/upload/${newPostId}`,
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         setImagePath(response.data.url);
  //       });

  //     const newPostData = {
  //       BlogTitle: newTitle,
  //       Status: newDescription,
  //       Post: newPost,
  //       ImagePath,
  //     };

  //     const response = await axios.post(
  //       "https://omechospital.com/api/Blog",
  //       newPostData
  //     );

  //     getPosts();
  //     setNewTitle("");
  //     setNewDescription("");
  //     setNewPost("");
  //     setImage(null);
  //   } catch (err) {
  //     console.error(err);
  //     setLoading(false);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   axios
  //     .get("https://api.cloudinary.com/v1_1/daak7spdb/image/upload")
  //     .then((response) => {
  //       setImageList(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://omechospital.com/api/Blog/${id}`);
      getPosts();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteImage = async (imagePath) => {
    try {
      await axios.delete(
        `https://api.cloudinary.com/v1_1/daak7spdb/image/upload?imagePath=${encodeURIComponent(
          imagePath
        )}`
      );
      setImageList((prevList) => prevList.filter((path) => path !== imagePath));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-12">
      <Helmet>
        <title>OMEC</title>
        <meta
          name="description"
          content="Discover fascinating insights into the world of eyes and vision. From the anatomy and physiology of the eye to common eye conditions, this blog provides valuable information, helpful tips, and expert advice to maintain healthy eyesight. Explore topics such as eye health, vision care, eye exercises, eye safety, and the latest advancements in eye technology. Whether you're curious about eye care or seeking answers to specific eye-related questions, our blog is your go-to resource for all things related to eyes."
        />
      </Helmet>
      <Navbar />
      <Blogauth />
      <div className="flex flex-col gap-4">
        <input
          placeholder="Title"
          className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <div>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <ReactQuill
          theme="snow"
          value={newPost}
          className="h-96 w-[100%]"
          modules={modules}
          onChange={(value) => setNewPost(value)}
        />

        <button
          className="mt-10 focus:outline-none bg-black transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white font-bold px-8 py-2 text-sm leading-6"
          onClick={handleSubmitPost}
        >
          Submit
        </button>
      </div>
      <div>
        {posts.length > 0 ? (
          <BlogList
            data={posts}
            deletePost={deletePost}
            deleteImage={deleteImage}
          />
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blogsec;
