export interface ILoginResponse {
  token: string
}

export class LoginRequest {
  constructor(
    public readonly email: string,
    public readonly name: string
  ) {}
}
