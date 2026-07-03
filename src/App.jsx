import "./App.css";
import { Routes, Route, NavLink, useParams } from "react-router";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Home...</p>
    </div>
  );
}

let contents = [
  { id: 1, title: "HTML", description: "HTML is.." },
  { id: 2, title: "JS", description: "JS is.." },
  { id: 3, title: "React", description: "React is.." },
];
function Topic() {
  let params = useParams();
  console.log(params);
  return <div>topic...</div>;
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <nav>
        <ul>
          {contents.map(c => (
            <li key={c.id}>
              <NavLink to={`/topics/${c.id}`}>{c.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route path=":topic-id" element={<Topic />} />
      </Routes>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact...</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
