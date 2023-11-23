import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import BlogList from './BlogList';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [imageList, setImageList] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get('https://omechospital.com/api/Blog');
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    // Fetch images from the API and update the imageList state
    axios.get('https://omechospital.com/api/Images')
      .then((response) => {
        setImageList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      await axios.delete(`https://omechospital.com/api/Images?imagePath=${encodeURIComponent(imagePath)}`);
      setImageList((prevList) => prevList.filter((path) => path !== imagePath));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <Helmet>
        <title>OMEC Blog</title>
        {/* ... meta description ... */}
      </Helmet>
      <BlogList
        data={posts}
        deletePost={deletePost}
        imageList={imageList}
        deleteImage={deleteImage}
      />
      <div></div>
    </div>
  );
};

export default Blog;
