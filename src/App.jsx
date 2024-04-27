import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples.jsx";
import Section from "./components/Section.jsx";
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }The function below is the destructured format of this one*******************

function App() {
  return (
    <>{/*Instead of div or Fragment this empty tag can also be used as parent tag */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
