import { Grid } from '@material-ui/core';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { MaterialButton } from '../common/button/MaterialButton';
import { MaterialInput } from '../common/input/MaterialInput';
import { LoginRequest } from '../common/model/LoginModel';
import { LoginService } from '../common/service/LoginService';


export const Login: () => JSX.Element = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const loginService = new LoginService()

  // TODO
  localStorage.clear();

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
    loginService.login(new LoginRequest(email, name))
      .then((response) =>  console.log(response.data))
      .catch((error: AxiosError) => {
        console.log(error)
        moveLogin()
      })

  const moveLogin = () => {
    // TODO
    localStorage.setItem("token", "true");
    history.push('/device');
  }

  return (
    <>
    {/* TODO: レイアウト部品を作成する */}
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={8}>
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
            <div>
              <MaterialButton text="ログイン" color="primary" variant="contained" onClick={onLogin} />
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
}