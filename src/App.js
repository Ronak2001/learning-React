import { useState, useEffect } from 'react';
import './App.css';
import lengineer from "./Hulahooh.JPG"

function Header(props) {
  return (
    <header>
      <h1>{props.name} is {props.adjective}!</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Roank was {props.verb}. Ronak is {props.verb}. Ronak will be {props.verb}.</p>
      <img src={lengineer} height={200} alt="LeNgineer Logo" />
      <img src="https://github.com/ronak2001.png" height={200} alt="Ronak's github profile" />

      <ul style={{ textAlign: "left" }}>
        {props.languages.map((language) => (
          <li key={language.id}>{language.title}</li>
        ))}
      </ul>

    </section>
  );
}

function Footer(props) {
  return (
    <p>He does not know anything else as till {props.year}.</p>
  );
}

const languages = [
  "Java",
  "Python",
  "JavaScript",
  "C",
  "C++"
];

const languageObject = languages.map((language, i) => ({ id: i, title: language }));


function App(props) {

const [adjective, setAdjective] = useState("awesome");

  if (props.authorized) {
    return (
      <div className="App">
        <Header name="Ronak" adjective={adjective} />
        <>
        <button onClick={() => setAdjective("amazing")} >Amazing</button>
        <button onClick={() => setAdjective("fabulous")}>Fabulous</button>
        <button onClick={() => setAdjective("still awesome")}>Crazy</button>
        </>


        <Main verb="coding" languages={languageObject} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
  else {
    return (null)
  }
}

export default App;
