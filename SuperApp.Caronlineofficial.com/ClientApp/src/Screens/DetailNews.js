import React from "react";
import { useParams } from "react-router-dom";

function DetailNews(props) {
  const params = useParams();
  console.log(params);

  return <div>{JSON.stringify(params)}</div>;
}

export default DetailNews;
