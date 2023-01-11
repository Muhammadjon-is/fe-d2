import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import "./styles.css";
const Blog = (props) => {
  const [book, setBook] = useState({});
  const [boooks, serBoooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const fetchBlogs = async () => {
      let response = await fetch(`https://be-d2-production.up.railway.app/boooks`);
      try {
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          serBoooks(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setBook(boooks.find((book) => book._id === id));
    console.log(book);
    setLoading(false);
  }, [boooks]);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <>
        {book && (
          <div className="book-details-root">
            <Container>
              <Image className="book-details-cover" src={book.cover} fluid />
              <h1 className="book-details-title">{book.title}</h1>

              <div className="book-details-container">
                <div className="book-details-author">
                  <BlogAuthor {...book.author} />
                </div>
                <div className="book-details-info">
                  <div>{book.createdAt}</div>
                  <div>{`${book.readTime.value} ${book.readTime.unit} read`}</div>
                  <div
                    style={{
                      marginTop: 20,
                    }}
                  >
                    <BlogLike defaultLikes={["123"]} onChange={console.log} />
                  </div>
                </div>
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: book.content,
                }}
              ></div>
            </Container>
          </div>
        )}
      </>
    );
  }
};

export default Blog;
