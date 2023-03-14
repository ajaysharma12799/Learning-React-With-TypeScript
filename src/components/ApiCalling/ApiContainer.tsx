import { FC, useState, useEffect } from 'react'
import { IUser } from './interface';
import UserCard from './UserCard';

const ApiContainer: FC = (): JSX.Element => {
  const [users, setUsers] = useState<Array<IUser>>([]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const responseObj = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await responseObj.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div>
      <h1>API Testing</h1>
      {
        users.map((user: IUser) => {
          return(
            <UserCard {...user} key={user.id} />
          )
        })
      }
    </div>
  )
}

export default ApiContainer