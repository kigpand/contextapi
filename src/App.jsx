import "./App.css";
import UserStore from "./store/users";
import Profile from "./components/Profile";
import User from "./components/User";

function App() {
  return (
    <UserStore>
      <div className="App">
        <User />
        <Profile />
      </div>
    </UserStore>
  );
}

export default App;
