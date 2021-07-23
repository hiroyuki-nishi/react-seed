import React from 'react';
import Button from '@material-ui/core/Button';

interface MaterialButtonProps {
  text: string;
}

export class MaterialButton extends React.Component<MaterialButtonProps> {
  render() {
    return (
      <Button variant="contained" color="primary">
        { this.props.text }
      </Button>
    )
  }
}