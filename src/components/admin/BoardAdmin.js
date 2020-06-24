import React, { useState, useEffect } from "react";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("content")
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export {BoardAdmin};
