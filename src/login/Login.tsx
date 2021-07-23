import React from 'react';
import { MaterialInput } from '../common/input/MaterialInput';


// interface LoginProps {
//   value: string;
// }

export class Login extends React.Component {
  changeValue(value: string): void {
    console.log(value)
    this.setState({ value: value });
  }

  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <MaterialInput label="email" variant="standard" changeValue={this.changeValue.bind(this)}/>
        </form>
      </>
    );
  }
}