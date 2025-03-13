import UserGreetings from "./userGreetings.jsx";

function App() {
  return (
    <>
      <UserGreetings isLoggedIn={true} userName={12} />
      <UserGreetings/>
    </>
  );
}

export default App;
