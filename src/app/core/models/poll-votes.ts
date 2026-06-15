import { User } from "./user";

export interface PollVote {
  answer:  string;
  count?:  number;
  users?:  User[];
}
