import React, { useState, useEffect } from "react";
import TeachersCards from "../../Components/admin/TeachersCards";

const Teachers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://reqres.in/api/users");
      const { data } = await res.json();

      const newData = data.map((user) => ({
        name: user.first_name.concat(" " + user.last_name),
        avatar: user.avatar,
        email: user.email,
      }));
      setUsers(newData);
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h4>Teachers</h4>
        </div>
      </div>
      <div className="row py-2 px-2 gap-3">
        {users.length &&
          users.map((user) => <TeachersCards user={user} key={user.email} />)}
      </div>
    </div>
  );
};

export default Teachers;
