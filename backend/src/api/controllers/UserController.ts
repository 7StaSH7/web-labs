import { Body, Post, JsonController, Get } from "routing-controllers";
import {
  login,
  LoginParams,
  register,
  RegisterParams,
} from "@core/services/user";

@JsonController("")
export class UserController {
  @Post("/login")
  async login(@Body() params: LoginParams) {
    const data = await login(params);
    return { data: data };
  }

  @Post("/register")
  async register(@Body() params: RegisterParams) {
    const data = await register(params);
    return { data: data };
  }
}
