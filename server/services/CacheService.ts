import NodeCache, { Options } from "node-cache";

export interface ICacheServiceOptions {
    cacheOptions: Options;
}

export class CacheService {
    private cache: NodeCache;

    constructor(options: ICacheServiceOptions) {
        this.cache = new NodeCache(options.cacheOptions);
    }

    public get<TValue>(key: string): TValue {
        return this.cache.get(key);
    }

    public set<TValue>(key: string, value: TValue): boolean {
        return this.cache.set(key, value);
    }

    public flush(): void {
        return this.cache.flushAll();
    }
}
