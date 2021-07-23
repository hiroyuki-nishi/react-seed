import React from 'react';
import { MaterialButton } from './Material-Button';
import './App.css';


class BaseWrapComponent extends React.Component {
  render() {
    return (
      <>
        <MaterialButton text="PIYO"/>
      </>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="main">
      <BaseWrapComponent />
    </div>
  );
}

export default App;