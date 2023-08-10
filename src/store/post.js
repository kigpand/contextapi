import React, { createContext } from "react";

export const PostContext = createContext();

const PostStore = ({ children }) => {
  const post = [
    {
      id: 1,
      post: "첫번째",
    },
    {
      id: 2,
      post: "두번째",
    },
    {
      id: 3,
      post: "세번째",
    },
  ];

  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

export default PostStore;
