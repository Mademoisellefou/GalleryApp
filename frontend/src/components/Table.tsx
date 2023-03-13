import React, { useEffect, useState } from "react";
import axios from "axios";
type User = {
  id: string;
  name: string;
  photos: Photo[];
};
type Photo = {
  id: string;
  url: string;
};
function Table() {
  const [users, setUsers] = useState<User[]>([]);
  const getTable = async () => {
    const result = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/photo/allphotos`
    );
    setUsers(result.data);
  };
  useEffect(() => {
    getTable();
  }, []);
  const onClicked = () => {
    console.log(users);
  };
  return (
    <div className="tablalist">
      <button
        onClick={() => {
          onClicked();
        }}
      >
        HOLI
      </button>
      <table className="table">
          <thead>
            <tr>
              <th scope="col">usuario</th>
              <th scope="col">asignar</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td className="asignar">
                  <ul>
                    {user.photos.map(
                        (photo,index)=>
                        <li key={index}>{photo.url}</li>
                    )}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default Table;
