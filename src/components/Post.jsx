import { useContext } from "react";
import { PostContext } from "../store/post";

export default function Post() {
  const post = useContext(PostContext);
  return (
    <>
      {post.map((item) => {
        return <div key={item.id}>{item.post}</div>;
      })}
    </>
  );
}
