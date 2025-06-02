export default class User {
  id: string;
  name?: string;
  username: string;
  password: string;

  public constructor(username: string, password: string) {
    this.id = String(Math.round(Math.random() * 100));
    this.username = username;
    this.password = password;
  }

}
