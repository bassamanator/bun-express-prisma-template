type User = {
  email: string | null;
  emailVerified?: Date;
  id: string;
  password: string;
  passwordSalt: string | null;
};
