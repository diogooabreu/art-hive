export default class Order {
   id: string;
   email: string;
   subject: string;
   message: string;

  public constructor(
    email: string,
    subject: string,
    message: string
  ) {
    this.id = String(Math.round(Math.random() * 100));
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}