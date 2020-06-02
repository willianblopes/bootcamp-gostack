interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserDate {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({name, email, password}: CreateUserDate) {
 const user = {
    name,
    email,
    password,
  }
  return user;
}