import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      let response = await fetch("https://be-d2-production.up.railway.app/blogs");
      try {
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setBlogs(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Row>
      {blogs.map((blog) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={blog._id}
        >
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
