export default function Post({ post }) {
  const { id, title, body } = post;
  const postStyle = {
    padding: "10px",
    border: "1px solid red",
    borderRadius: "30px",
    fontSize: "25px",
    marginTop: '10px'
  };
  return (
    <div style={postStyle}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
