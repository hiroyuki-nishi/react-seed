import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialButton } from '../common/button/MaterialButton';
import { MaterialInput } from '../common/input/MaterialInput';
import { LoginRequest } from '../common/model/LoginModel';
import { LoginService } from '../common/service/LoginService';


export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const loginService = new LoginService()

  const formChange = (formName: string, value: string) => {
    switch (formName) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        console.log('key not found');
    }
  };

  const onLogin = () => 
    loginService.login(new LoginRequest(email, name), () => history.push('/home'))

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