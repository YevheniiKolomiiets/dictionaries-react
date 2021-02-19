import { useSelector } from 'react-redux';

function UserInfo(props) {
  const { user } = useSelector((state) => state.auth);
  return <div>{user.login}</div>;
}

export default UserInfo;
