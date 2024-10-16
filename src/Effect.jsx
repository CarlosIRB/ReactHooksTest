import { useEffect, useState } from "react";

const Effect = () => {
  const [users, setUsers] = useState([]);

  const getUsuarios = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  useEffect(() => {
    console.log(users)
  }, [users]);

  return (
    <div>
      <h1>UseEffect</h1>
      <hr />
      {users.length>0 & users.map((user) => <li key={user.name}>{user}</li>)}
    </div>
  );
};

export default Effect;
