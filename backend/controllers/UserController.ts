import { Controller, Body, Post } from "routing-controllers";
import { login, LoginParams, register, RegisterParams } from "../services/user";

@Controller("")
export class UserController {
  @Post("/login")
  async login(@Body() params: LoginParams) {
    return await login(params);
  }

  @Post("/register")
  async register(@Body() params: RegisterParams) {
    console.log(params);
    return await register(params);
  }
}
