import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import useStore from "../../store";
import { searchMatches } from "../../services/utils";
import { HandleClick, Match } from "../../types";
import styles from "./CreateFormula.module.scss";
import theme from "./AutoSuggest.module.scss";

export default function CreateFormula({ onClick }: HandleClick) {
  const [inputValue, setInputValue] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const lastWord = inputValue.split(/\s+/).pop();
    if (lastWord) {
      const filtered = searchMatches(lastWord);
      setMatches(filtered);
    } else {
      setMatches([]);
    }
  }, [inputValue]);

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const lastWord = value.split(/\s+/).pop();
    if (lastWord) {
      const filtered = searchMatches(lastWord);
      setMatches(filtered);
    } else {
      setMatches([]);
    }
  };

  const onSuggestionsClearRequested = () => {
    setMatches([]);
  };

  const getSuggestionValue = (suggestion: Match) =>
    `${suggestion.name}${suggestion.type === "func" ? "()" : ""}`;

  const renderSuggestion = (suggestion: Match) => (
    <div>
      {suggestion.name}
      {suggestion.type === "func" ? "()" : ""}
    </div>
  );

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    { newValue }: { newValue: string }
  ) => {
    setInputValue(newValue);
  };

  const onSuggestionSelected = (
    event: React.FormEvent,
    { suggestion }: { suggestion: Match }
  ) => {
    const cursorPos = inputValue.lastIndexOf(" ") + 1;
    const beforeCursor = inputValue.slice(0, cursorPos);
    const newValue = `${beforeCursor}${suggestion.name}${
      suggestion.type === "func" ? "()" : ""
    } `;
    setInputValue(newValue);
  };

  const inputProps = {
    placeholder: "ex. MAX(1,2,3,4,5)",
    value: inputValue,
    onChange: onChange,
  };

  function submitInput() {
    if (!name || !inputValue) {
      alert("All field required");
      return;
    }

    try {
      useStore.getState().addFormula(name, inputValue.toUpperCase());
      onClick();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <span onClick={onClick} className={styles.closeIcon}>
          &times;
        </span>
        <h3>Create Your Own Formula</h3>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.nameInput}
          placeholder="New formula"
          required
        />
        <Autosuggest
          theme={theme}
          suggestions={matches}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />
        <button onClick={submitInput} type="submit" className={styles.addBtn}>
          + Add
        </button>
      </div>
    </div>
  );
}
