import dotenv from "dotenv";
dotenv.config();

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import defaultConnectionOptions from "./ormConfig";

console.log(process.env);

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};
const handleAppStat = () => console.log(`Listening on port ${PORT}`);

createConnection(defaultConnectionOptions)
  .then(() => {
    app.start(appOptions, handleAppStat);
  })
  .catch(error => console.log(error));
