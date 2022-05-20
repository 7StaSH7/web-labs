import { getRepository, IsNull, Not } from "typeorm";
import { Card } from "../entity/Card";
import Pusher from "pusher";
import { IsString } from "class-validator";
import { Like } from "../entity/Like";
import { User } from "../entity/User";
require("dotenv").config();

export class ActParams {
  @IsString()
  action!: string;

  @IsString()
  socketId!: string;

  username!: string;
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

export class GetLikedCardParams extends Like {
  username!: string;
}

export const act = async (id: number, params: ActParams) => {
  const cardRep = getRepository(Card);
  const likeRep = getRepository(Like);
  const userRep = getRepository(User);

  const user = await userRep.findOneOrFail({ username: params.username });

  let counter;
  if (params.action === "like") {
    await likeRep.save({ user: user.id, card: id });
    counter = 1;
  } else {
    await likeRep.delete({ user: user.id, card: id });
    counter = -1;
  }
  const updated = await cardRep.increment({ id }, "likesCount", counter);

  pusher.trigger(
    "card-events",
    "cardAction",
    { action: params.action, cardId: id, userId: user.id },
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
  const dogs = await cardRep.find({
    where: { dogId: Not(IsNull()) },
    order: { id: "ASC" },
  });

  return dogs;
};

export const getLikedCards = async (params: GetLikedCardParams) => {
  const userRep = getRepository(User);
  const likeRep = getRepository(Like);
  const user = await userRep.findOne({
    where: { username: params.username },
  });
  let cards: Like[] = [];
  if (user) {
    cards = await likeRep.find({
      where: { user: { id: user.id } },
      relations: ["card"],
    });
  }
  return cards;
};
