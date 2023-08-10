import { useContext } from "react";
import { PostContext } from "../store/post";

export default function PostCount() {
  const post = useContext(PostContext);
  return <>{post.length}</>;
}
