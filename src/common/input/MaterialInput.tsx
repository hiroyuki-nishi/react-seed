
import { TextField } from '@material-ui/core';
import React from 'react';

export class MaterialInput extends React.Component {
  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          {/* <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </form>
      </>
    );
  }
}