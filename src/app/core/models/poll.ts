import { Category } from "./category";
import { PollVote } from "./poll-votes";


export interface Poll {
  id:          number;
  title:       string;
  description: string;
  category:    Category;
  expiresAt:   Date;
  totalVotes?:  number;
  votes?:       PollVote[]; // votos por resposta
}
