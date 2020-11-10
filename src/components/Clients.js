import React from "react";
import { Link } from "react-router-dom";

function Clients(props) {
  const { id, featuredImage, title, createDay, createMonth, filesource } = props.data;
  const getShortMonth = month => {
    return month.slice(0, 3);
  };
  const getNospaceTitle = filesource => {
    let tempArr = filesource.split('/');
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
          <img src={featuredImage} alt={title} />
      </div>
      <div className="mi-blog-content">
        <h5>
            {title}
        </h5>
      </div>
    </div>
  );
}

export default Clients;
