import { IUser } from './interface'

const UserCard = ({ name, username, email }: IUser) => {
  return (
    <div className="user-card">
      <h4>Name:- {name}</h4>
      <h4>Username:- {username}</h4>
      <h4>Email:- {email}</h4>
    </div>
  );
};

export default UserCard