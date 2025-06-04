export default class User {
  id: string;
  name?: string;
  username: string;
  email: string;
  password: string;

  public constructor(username: string, email: string, password: string) {
    this.id = String(Math.round(Math.random() * 100));
    this.username = username;
    this.email = email;
    this.password = password;
  }

}
