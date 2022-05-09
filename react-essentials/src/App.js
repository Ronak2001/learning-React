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

function App() {
  return (
    <div className="App">
      <Header name="Ronak" />
      <Main language="React" />
      <Footer year={new Date().getFullYear(2022)} />
    </div>
  );
}

export default App;
