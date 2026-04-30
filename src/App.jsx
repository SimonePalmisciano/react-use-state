import Card from "./components/Card.jsx";
import languages from "./data/languages.js";

function App() {
  return (
    languages.map(language => {
      return <Card
        key = {language.id}
        language = {language}
      />
    })
  );
}
export default App;
