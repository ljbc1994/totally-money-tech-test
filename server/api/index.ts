import { Express } from "express";
import { withCardApi } from "./card";

export function withApi(api: Express) {
    withCardApi(api);
}
