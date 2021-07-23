import React from 'react';
import { MaterialInput } from '../common/input/MaterialInput';

export class Login extends React.Component {
  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <MaterialInput label="aa" variant="standard" />
        </form>
      </>
    );
  }
}