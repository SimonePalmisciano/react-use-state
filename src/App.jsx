import { useState } from "react";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import languages from "./data/languages.js";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  function handleSelectedLanguage(selected){
    setSelectedLanguage(selected)
  }
  console.log(selectedLanguage)

  return (
    <div className="container">
      <div className="btn-container">
        {languages.map(language => {
          return (
            <Button
              key={language.id}
              language={language}
              onSelect={handleSelectedLanguage}
              active={selectedLanguage.id}
            />
          );
        })}
      </div>
      <Card 
        language={selectedLanguage.description}
      />
    </div>
  );
}
export default App;

// <Card
//               key={language.id}
//               language={language}
//             />
