import { use } from "react";
import User from "./user";
export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);
  const usersStyle = {
    padding: "5px",
    fontSize: "25px",
  };
  return (
    <>
      <div style={usersStyle}>
        <p>Users : {users.length}</p>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </>
  );
}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }
