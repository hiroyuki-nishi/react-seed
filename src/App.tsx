import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';


class Hoge extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    )
  }
}

class AdmissionFeeCalculator extends React.Component {
  render() {
    return (
      <>
        <Hoge />
      </>
    );
  }
}

const App: React.FC = () => {
  return (
    <div className="main">
      <AdmissionFeeCalculator />
    </div>
  );
}

export default App;