import PropTypes from "prop-types";
function UserGreetings(props)
{
  const welcomeMessage = <h1>Welcome {props.userName}</h1>;
  const notLoggedInMessage = <p>Pls login</p>;
  return props.isLoggedIn ? welcomeMessage : notLoggedInMessage;
};

UserGreetings.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedIn: true,
  userName: "Guest",
};
export default UserGreetings;
