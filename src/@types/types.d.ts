type User = {
  createdAt: Date;
  email: string;
  emailVerified: Date | null;
  id: string;
  password: string;
  passwordSalt: string | null;
  updatedAt: Date;
};
