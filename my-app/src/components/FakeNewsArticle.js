import React from "react";
import { Link } from "react-router-dom"; // Add this line to import Link

const FakeNewsArticle = ({
  id,
  title,
  author,
  body,
  tags,
  created_at,
  edited_at,
  isPage,
}) => {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <div className="fake-news-article">
      <h1 className="article-title">{title}</h1>
      <p className="article-meta">
        Published on {formattedDate} by {author}
      </p>
      <div className="article-content">
        <p>
          {body.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              <br />
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="article-tags">
        {tags.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className="article_edited">
        {edited_at != null ? (
          <p>Edited on {new Date(edited_at).toLocaleDateString()}</p>
        ) : (
          <></>
        )}
      </div>
      <Link to={isPage ?  "/news" : { pathname: `/comment/${id}` }}>
        {isPage ?  "Go back home" : "Comments" }
      </Link>
    </div>
  );
};

export default FakeNewsArticle;
