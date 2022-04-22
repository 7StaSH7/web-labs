import { getRepository, IsNull, Not } from "typeorm";
import { Card } from "../entity/Card";
import Pusher from "pusher";
import { IsString } from "class-validator";
require("dotenv").config();

export class ActParams {
  @IsString()
  action!: string;

  @IsString()
  socketId!: string;
}

export class CreateCardParams extends Card {
  catId?: string | undefined;
  dogId?: string | undefined;
  imgSrc!: string;
}

let pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: process.env.PUSHER_APP_CLUSTER!,
});

export const act = async (id: number, params: ActParams) => {
  const cardRep = getRepository(Card);
  let counter = params.action === "like" ? 1 : -1;
  const updated = await cardRep.increment({ id }, "likesCount", counter);

  pusher.trigger(
    "card-events",
    "cardAction",
    { action: params.action, cardId: id },
    { socket_id: params.socketId }
  );
  return updated;
};

export const create = async (params: CreateCardParams) => {
  const cardRep = getRepository(Card);
  return await cardRep.save(params);
};

export const getCats = async () => {
  const cardRep = getRepository(Card);
  return await cardRep.find({
    where: { catId: Not(IsNull()) },
    order: { id: "ASC" },
  });
};

export const getDogs = async () => {
  const cardRep = getRepository(Card);
  return await cardRep.find({
    where: { dogId: Not(IsNull()) },
    order: { id: "ASC" },
  });
};
