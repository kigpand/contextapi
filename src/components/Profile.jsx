import { useContext } from "react";
import { UserContext } from "../store/users";
import PostStore from "../store/post";
import Post from "./Post";
import PostCount from "./PostCount";

export default function Profile() {
  const context = useContext(UserContext);

  return (
    <>
      <h1>Profile</h1>
      <div>{context.age}</div>
      <div>{context.job}개발자</div>
      <PostStore>
        <Post />
        <PostCount />
      </PostStore>
    </>
  );
}
