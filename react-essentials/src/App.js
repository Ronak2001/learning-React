import './App.css';
import logo from "./logo.svg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Code</h1>
    </header>
  );
}

function Main(props) {
  return (
    <main>
      <img src="https://github.com/Ronak2001.png" height="100" alt="Ronak's github profile picture" />
      <p>
        Ronak is learning {props.language}.
      </p>
      <img src={logo} height="50" alt="react logo" />
      <ul style={{ textAlign: "left" }}>
        {props.languages.map((language) => (<li key={language.id}>{language.title}</li>))}
      </ul>
    </main>
  );
}

function Footer(props) {
  return (
    <footer>
      He will this by end of year {props.year}.
    </footer>
  );
}

const languages = [
  "Java",
  "Javascript",
  "Python"
];

//converting array to object to solve key issue
const languagesObject = languages.map((language, i) => ({ id: i, title: language }));

function App() {
  return (
    <div className="App">
      <Header name="Ronak" />
      <Main language="React" languages={languagesObject} />
      <Footer year={new Date().getFullYear(2022)} />
    </div>
  );
}

export default App;
