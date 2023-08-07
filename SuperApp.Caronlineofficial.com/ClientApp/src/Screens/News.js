import React from "react";
import Story from "../components/Story";
import StorylistItem from "../components/StorylistItem";

function News(props) {
  return (
    <div>
      <Story />

      <div className="story-list">
        <StorylistItem />

        <StorylistItem />

        <StorylistItem />

        <StorylistItem />
      </div>
    </div>
  );
}

export default News;
