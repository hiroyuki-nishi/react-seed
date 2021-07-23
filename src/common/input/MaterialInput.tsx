
import { TextField } from '@material-ui/core';
import React from 'react';


interface MaterialInputProps {
  label: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  changeValue: (value: string) => void
}

export class MaterialInput extends React.Component<MaterialInputProps> {
  // constructor(props: MaterialInputProps) {
  //   super(props);
  //   // this.state = {value: ""};
  // }

  handleChange(): any {
    return (event: any) => {
      // this.setState({value: event.target.value});
      this.props.changeValue(event.target.value);
    }
  }

  render() {
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField
            label={this.props.label}
            variant={this.props.variant}
            onChange={this.handleChange()}
          />
        </form>
      </>
    );
  }
}