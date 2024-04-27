import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(""); //must be called in inside function

  let tabContent = "Please click a button";

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic && <p>Please select a topic</p>}
      {selectedTopic && (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
