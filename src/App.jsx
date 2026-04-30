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
          const isActive = language.id === selectedLanguage.id;
          return (
            <Button
              key={language.id}
              language={language}
              onSelect={handleSelectedLanguage}
              active={isActive}
            />
          );
        })}
      </div>
      <Card 
        language={selectedLanguage}
      />
    </div>
  );
}
export default App;

// <Card
//               key={language.id}
//               language={language}
//             />
