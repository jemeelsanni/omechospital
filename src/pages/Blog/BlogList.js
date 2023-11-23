import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Helmet } from 'react-helmet';

const BlogList = ({ data, deletePost, deleteImage }) => {
  const handleDelete = (id, imagePath) => {
    deletePost(id);
    deleteImage(imagePath);
  };

  return (
    <div>
      <Helmet>
        <title>OMEC Blog</title>
        <meta
          name="description"
          content="Discover fascinating insights into the world of eyes and vision. From the anatomy and physiology of the eye to common eye conditions, this blog provides valuable information, helpful tips, and expert advice to maintain healthy eyesight. Explore topics such as eye health, vision care, eye exercises, eye safety, and the latest advancements in eye technology. Whether you're curious about eye care or seeking answers to specific eye-related questions, our blog is your go-to resource for all things related to eyes."
        />
      </Helmet>
      <Navbar />
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div className="p-6 space-y-2" key={item.id}>
            {item.images && item.images.length > 0 && (
              <img
                src={item.images[0]}
                alt="Uploaded"
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-coolGray-500"
              />
            )}
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {item.Title}
            </h3>
            <p>{item.description}</p>
            <Link to={`/blogpost/${item.id}`}>Read More</Link>
            <button onClick={() => handleDelete(item.id, item.images[0])}>
              Delete Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

