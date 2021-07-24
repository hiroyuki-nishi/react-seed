import { useState } from 'react';
import { MaterialButton } from '../common/button/MaterialButton';
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

  const onLogin = () => {
    console.log("login")
    console.log(email, name)
  }

  return (
    <>
      <form noValidate autoComplete="off">
        <div>
          <MaterialInput
            formName="email"
            inputProps={{ maxLength: 128 }}
            label="email"
            variant="standard"
            changeValue={formChange}
          />
        </div>
        <div>
          <MaterialInput
            formName="name"
            label="name"
            variant="standard"
            changeValue={formChange}
          />
        </div>
        <MaterialButton text="ログイン" onClick={onLogin}/>
      </form>
    </>
  );
}