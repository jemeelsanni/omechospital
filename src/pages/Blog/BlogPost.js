import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

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

  const filteredPost = posts.find((x) => x.id === id);

  if (!filteredPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>{filteredPost.Title}</title>
        <meta name="description" content={filteredPost.description} />
      </Helmet>
      <Navbar />
      <div className="w-full h-full flex flex-col p-4">
        <h1 className="text-4xl font-semibold text-left">
          {filteredPost.Title}
        </h1>
        <p>{filteredPost.description}</p>
        <div
          className="text-lg font-normal flex flex-col gap-1"
          dangerouslySetInnerHTML={{ __html: filteredPost.post }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPost;
