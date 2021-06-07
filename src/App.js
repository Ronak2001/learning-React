import './App.css';
import lengineer from "./Hulahooh.JPG"

function Header(props){
  return (
    <header> 
    <h1>{props.name} is awsome!</h1>
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>Roank was {props.verb}. Ronak is {props.verb}. Ronak will be {props.verb}.</p> 
      <img src={lengineer} height={200} alt="LeNgineer Logo"/>
      <img src="https://github.com/ronak2001.png" height={200} alt="Ronak's github profile"/>

      <ul style={{textAlign:"left"}}>
        {props.languages.map((language)=>(
        <li key={language.id}>{language.title}</li>
        ))}
      </ul>

    </section>
  );
}

function Footer(props){
  return(
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

const languageObject = languages.map((language,i)=>
({id:i, title:language}));

function App(props) {
  if(props.authorized){
  return (
    <div className="App">
      <Header name="Ronak"/>
      <Main verb="coding" languages={languageObject}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
  }
  else{
    return (null)
  }
}

export default App;
