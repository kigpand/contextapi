import { useContext } from "react";
import { UserContext } from "../store/users";
import { PostContext } from "../store/post";

export default function User() {
  const context = useContext(UserContext);

  // post provider의 하위 컴포넌트가 아니므로 post는 undefined
  const post = useContext(PostContext);
  console.log(post);
  return (
    <>
      <h1>User</h1>
      <div>{context.name}</div>
    </>
  );
}
