import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/Constants";

function MyLayout() {
  console.log("MyLayout called");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("UseEffect called");
    axios.get(API_URL + "/api/getall").then((response) => {
      console.log("inside Response");
      console.log(response);
      setItems(response.data);
    });
  }, []);

  return (
    <Container fluid>
      <ul>
        {items.map((item) => (
          <div>
            <FakeNewsArticle
              id={item._id}
              title={item.title}
              author={item.author}
              body={item.body}
              tags={item.tags}
              created_at={item.created_at}
              edited_at={item.edited_at}
            />
          </div>
        ))}
      </ul>
    </Container>
  );
}

const FakeNewsArticle = ({
  id,
  title,
  author,
  body,
  tags,
  created_at,
  edited_at,
}) => {
  const formattedDate = new Date(created_at).toLocaleDateString();
  return (
    <div className="fake-news-article">
      <h1 className="article-title">{title}</h1>
      <p className="article-meta">
        Published on {formattedDate} by {author}
      </p>
      <p className="article-content">
      <p>{body.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br /><br />
        </React.Fragment>
      ))}</p>
      </p>
      <div className="article-tags">
        {tags.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <div className="article_edited">
      {edited_at != null? <p>Edited on {new Date(edited_at).toLocaleDateString()}</p> : <></>}
    </div>
    </div>
  );
};

export default MyLayout;