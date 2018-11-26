export const typeDefs = ["type SayByeResponse {\n  error: Boolean!\n  text: String!\n}\n\ntype Query {\n  sayBye(name: String!): SayByeResponse!\n  sayHello: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: SayByeResponse;
  sayHello: string;
}

export interface SayByeQueryArgs {
  name: string;
}

export interface SayByeResponse {
  error: boolean;
  text: string;
}
