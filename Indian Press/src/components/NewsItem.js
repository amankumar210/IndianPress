import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
    {/* <div className="my-3" style={{ maxHeight: "400px", overflow: "auto" }}></div> */}
      <div className="my-3">
        <div
          className="card"
          style={{
            width: "18rem",
            boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
          }}
        >
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zindex: "1", left: "90%" }}
          >
            {source}
          </span>
          <img className="card-img-top" src={imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title ">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
