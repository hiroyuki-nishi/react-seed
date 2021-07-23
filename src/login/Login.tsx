import { useState } from 'react';
import { MaterialInput } from '../common/input/MaterialInput';

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const formChange = (formName: string, value: string) => {
    switch (formName) {
      case 'email':
        setEmail(value);
        console.log(email, name)
        break;
      case 'name':
        setName(value);
        console.log(email, name)
        break;
      default:
        console.log('key not found');
    }
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <MaterialInput
          formName="email"
          label="email"
          variant="standard"
          changeValue={formChange}
        />
        <MaterialInput
          formName="name"
          label="name"
          variant="standard"
          changeValue={formChange}
        />
      </form>
    </>
  );
}