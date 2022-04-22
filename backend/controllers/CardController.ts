import { Body, Post, JsonController, Get, Param } from "routing-controllers";
import {
  act,
  ActParams,
  create,
  CreateCardParams,
  getCats,
  getDogs,
} from "../services/card";

@JsonController("/cards")
export class PostController {
  @Post("/:id/act")
  async act(@Param("id") id: number, @Body() params: ActParams) {
    return await act(id, params);
  }
  @Get("/cats")
  async getCats() {
    return { result: await getCats() };
  }
  @Get("/dogs")
  async getDogs() {
    return { result: await getDogs() };
  }
  @Post("/create")
  async create(@Body() params: CreateCardParams) {
    return { result: await create(params) };
  }
}
