export default function User({ user }) {
  const { name, username, id, phone, email } = user;
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "15px",
        borderRadius: "15px",
        marginTop: "10px",
      }}
    >
      <p>ID : {id}</p>
      <p>Name : {name}</p>
      <p>User Name : {username}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
    </div>
  );
}
