import { ApiClient } from "./ApiClient";

/**
 * NOTE:
 * Could be passed down from node
 */
const client = new ApiClient("http://localhost:3000/api");

export default client;
