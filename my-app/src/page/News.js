import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/Constants";
import FakeNewsArticle from "../components/FakeNewsArticle";
import MyNavbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import "./News.css";
import NoItemsComponent from "../components/NoItemsComponent";

function News() {
  console.log("MyLayout called");
  const [fullItems, setFullItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("UseEffect called");
    axios.get(API_URL + "/api/getall").then((response) => {
      console.log("inside Response");
      console.log(response);
      setItems(response.data);
      setFullItems(response.data);
      setIsLoaded(true);
    });
  }, []);

  const handleSearch = (string) => {
    const filteredItems = fullItems.filter((item) => {
      return item.title.toLowerCase().includes(string.toLowerCase());
    });
    setItems(filteredItems);
  };

  return (
    <div fluid>
      <header className="Toolbar">
        <MyNavbar search={handleSearch} />
      </header>

      <div className="NewsContent">
        {items.length === 0 ? (
          <NoItemsComponent isLoaded={isLoaded} handleSearch={handleSearch} />
        ) : (
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
            <div>
              <Button variant="dark" onClick={() => handleSearch("")}>
                Reset Search
              </Button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default News;
