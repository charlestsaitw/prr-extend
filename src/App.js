import React from 'react';
import './App.css';
import Highlight, { defaultProps, Prism } from "prism-react-renderer";
import {ArielGrammar} from './ariel-grammar';

const exampleCode = `
select * from tablename;
update a where a=123
`;

function App() {
  // console.log(Prism.languages.sql);
  Prism.languages.ariel = ArielGrammar;
  return (
    <div className="App">
      <header className="App-header">
      <Highlight {...defaultProps} code={exampleCode} language="ariel">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>

      </header>
    </div>
  );
}

export default App;
