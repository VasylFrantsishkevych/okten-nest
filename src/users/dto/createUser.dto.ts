export class CreateUserDto {
  public username: string;
  public email: string;
  public age: number;
  public city: string;
  readonly password: string;
}
