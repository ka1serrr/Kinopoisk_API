import { config } from "@/app";

type Fetch = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  version?: "1.4" | "1";
  signal?: AbortSignal;
};

type Query = Pick<Fetch, "path" | "version" | "signal">;

class FetchClient {
  private API_URL = config.API_URL;
  private API_1VERSION = config.API_1VERSION;

  private async $fetch<T>({ path, method, version, signal }: Fetch) {
    const url = version === "1" ? `${this.API_1VERSION}${path}` : `${this.API_URL}${path}`;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "X-API-KEY": config.TOKEN },
        signal,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Fetch error ${response.status} ${response.statusText}`);
      }

      return data as T;
    } catch (error) {
      console.log("Fetch error", error);
      const stringedError = error as string;
      throw new Error(stringedError);
    }
  }

  async get<T>({ path, version, signal }: Query) {
    return this.$fetch<T>({ path, method: "GET", version, signal });
  }
}

export const $fetch = new FetchClient();
