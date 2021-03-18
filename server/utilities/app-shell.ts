import path from "path";
import fs from "fs";
import { CacheService } from "../services/CacheService";

const cacheService = new CacheService({ cacheOptions: { stdTTL: 0 } });
const APP_SHELL_CACHE_KEY = "app-shell";

export async function getAppShell() {
    return new Promise<string>((res, rej) => {
        const existingFile = cacheService.get<string>(APP_SHELL_CACHE_KEY);

        if (existingFile != null) {
            return res(existingFile);
        }

        const indexFile = path.resolve("./dist/assets/views/index.html");

        fs.readFile(indexFile, "utf8", (err, result) => {
            if (err) {
                return rej(err);
            }

            cacheService.set<string>(APP_SHELL_CACHE_KEY, result);

            return res(result);
        });
    });
}
