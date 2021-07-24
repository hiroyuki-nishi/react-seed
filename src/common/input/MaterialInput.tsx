import { TextField } from '@material-ui/core';


interface MaterialInputProps {
  formName: string;
  inputProps?: { maxLength: number, pattern?: string }
  label: string;
  variant: "standard" | "filled" | "outlined" | undefined;
  changeValue: (formName: string, value: string) => void
}

export const MaterialInput = (props: MaterialInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.changeValue(props.formName, event.target.value);
  };

  return (<TextField
    inputProps={props?.inputProps}
    label={props.label}
    variant={props.variant}
    onChange={handleChange}
  />)
 };