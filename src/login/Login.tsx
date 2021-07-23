import React from 'react';
import { MaterialInput } from '../common/input/MaterialInput';

export class Login extends React.Component {
  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <MaterialInput />
          <MaterialInput />
          {/* <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </form>
      </>
    );
  }
}