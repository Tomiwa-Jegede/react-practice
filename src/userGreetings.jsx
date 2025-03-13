import PropTypes from "prop-types";
function UserGreetings(props)
{
  const welcomeMessage = <h1>Welcome {props.userName}</h1>;
  const notLocggedInMessage = <p>Pls login</p>;
  return props.isLoggedIn ? welcomeMessage : notLocggedInMessage;
};

UserGreetings.proptypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreetings.defaultProps = {
  isLoggedIn: true,
  userName: "Guest",
};
export default UserGreetings;
