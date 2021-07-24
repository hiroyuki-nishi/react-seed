import axios, { AxiosError } from 'axios';

import { ILoginResponse, LoginRequest } from "../model/LoginModel";

export class LoginService {
  login(request: LoginRequest, f: () => void): void {
    console.log(request);
    axios.get<ILoginResponse>('http://localhost:9999/login')
      .then((response) => {
        console.log(response.data);
        f();
      })
      .catch((error: AxiosError) => console.log(error))
  }
}

