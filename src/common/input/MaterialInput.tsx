
import { TextField } from '@material-ui/core';
import React from 'react';


interface MaterialInputProps {
  label: string;
  variant: "standard" | "filled" | "outlined" | undefined;
}

export class MaterialInput extends React.Component<MaterialInputProps> {
  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField label={ this.props.label } variant={ this.props.variant }/>
        </form>
      </>
    );
  }
}