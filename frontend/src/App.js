import logo from './logo.svg';
import './App.css';

const header = (
    <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
);

const main = (
    <main>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </main>
  )

  const footer = (
    <footer>
      <p>Copyright 2020</p>
    </footer>
  )

function App() {
  return (
    {header},
    {main},
    {footer}
  );
}

export default App;
