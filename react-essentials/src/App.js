import './App.css';

function Header() {
  return (
    <header>
      <h1>Ronak's Code</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <p>
        Ronak is learning React.
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      He got this.
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
