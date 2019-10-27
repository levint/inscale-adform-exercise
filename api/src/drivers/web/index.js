import express from 'express';
import { registerGraphQLMiddleware } from './middlewares/graphql';

const server = express();
const port = process.env.PORT || 80;

registerGraphQLMiddleware(server);

server.listen(port, () => {
  console.log(`🚀 Server is running on localhost:${port}`);
});

export default server;
