import { SayByeQueryArgs, SayByeResponse } from "src/types/graph";

const resolvers = {
  Query: {
    sayBye: (_, arg: SayByeQueryArgs): SayByeResponse => {
      return {
        error: false,
        text: `love you ${arg.name}`
      };
    }
  }
};

export default resolvers;
