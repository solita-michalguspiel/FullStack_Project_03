import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/Constants";
import FakeNewsArticle from "../components/FakeNewsArticle";
import { Link } from "react-router-dom"; // Add this line to import Link

function News() {
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
          <div key={item._id}>
            <FakeNewsArticle
              id={item._id}
              title={item.title}
              author={item.author}
              body={item.body}
              tags={item.tags}
              created_at={item.created_at}
              edited_at={item.edited_at}
              isPage={false}
            />
          </div>
        ))}
      </ul>
    </Container>
  );
}

export default News;
