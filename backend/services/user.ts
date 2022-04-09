import { IsEmail, IsOptional, IsString } from "class-validator";
import { HttpError } from "routing-controllers";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export class LoginParams extends User {
  @IsEmail()
  @IsOptional()
  email!: string;

  @IsString()
  @IsOptional()
  username!: string;

  @IsString()
  password?: string;
}
export class RegisterParams extends User {
  @IsEmail()
  email!: string;

  @IsString()
  username!: string;

  @IsString()
  password?: string;
}
export const login = async (params: LoginParams) => {
  const rep = getRepository(User);
  const user = await rep.findOne({
    where: { email: params.email },
  });

  if (!user) throw new HttpError(404, "user.not-found");
  if (user.password !== params.password)
    throw new HttpError(403, "user.password-not-match");

  delete user.password;

  return user;
};

export const register = async (params: RegisterParams) => {
  const rep = getRepository(User);

  const user = await rep.findOne({
    where: [{ email: params.email }, { username: params.username }],
  });

  if (user) throw new HttpError(400, "user.already-exist");

  const newUser = await rep.save(params);
  delete newUser.password;

  return newUser;
};
