export const saveProfileData = (props) => {
    // this would normally be an api call to persist...
    props.dispatch({ type: "SETUSER", user: props.userForm });
    props.history.push("/")
}