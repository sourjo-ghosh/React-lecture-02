import { Suspense, useState } from "react";
import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Header from "./header";
import Users from "./users";
import Posts from "./posts";
import Loading from "./suspanse";
import HelloWorld from "./hello-world";




// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );
function App() {
  // function handleClicked() {
  //   alert("I am clicked.");
  // }

  // const handleClicked3 = () => alert("Clicked From function No. 3 ");
  // const handleAdd5 = (num) => {
  //   const newNum = num + 10;
  //   alert(newNum);
  // };
  const postFetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };
  const postsPromises = postFetch();
  return (
    <>
      <Header></Header>
    <HelloWorld></HelloWorld>
      {/* <Suspense fallback={<Loading></Loading>}>
        <Posts postsPromises={postsPromises}></Posts>
      </Suspense> */}
      {/* <Hello></Hello> */}
      {/* <Suspense fallback={<h2>Data is Cooking...</h2>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <h1>Hello world</h1>
      <p>I am Leaning React JS</p>
      <div>
        <button className="Btn" onClick={handleClicked}>
          Click Me
        </button>
        <button
          className="Btn"
          onClick={function handleClicked2() {
            alert("I am clicked From in built Function ");
          }}
        >
          Click Me{" "}
        </button>
        <button onClick={handleClicked3} className="Btn">
          Click Me
        </button>
        <button
          className="Btn"
          onClick={() => alert("I am clicked from arrow function")}
        >
          click me
        </button>
        <button className="Btn" onClick={() => console.log("hello world")}>
          click me
        </button>
        <button onClick={() => handleAdd5(34)} className="Btn">
          Click me
        </button>
      </div>
      <Counter></Counter>
      <Counter2></Counter2>
      <Batsman></Batsman> */}
    </>
  );
}

export default App;

// function Counter2() {
//   let count = 0;
//   function handleClick() {
//     count = count + 1;
//     console.log(count);
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

function Counter2() {
  const [count, setCount] = useState(0);
  // function handleClick(){
  //   setCount(count +1)
  // }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function Hello() {
  return (
    <>
      <button className="Btn" onClick={() => alert("Hello world!")}>
        Click Me
      </button>
    </>
  );
}
