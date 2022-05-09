import './App.css';

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
      <p>
        Ronak is learning {props.language}.
      </p>
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
