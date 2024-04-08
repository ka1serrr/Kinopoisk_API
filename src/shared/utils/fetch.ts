import { config } from "@/app";

type Fetch = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
};

type Query = Pick<Fetch, "path">;

class FetchClient {
  private API_URL = config.API_URL;

  private async $fetch<T>({ path, method }: Fetch) {
    const url = `${this.API_URL}${path}`;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "X-API-KEY": config.TOKEN },
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

  async get<T>({ path }: Query) {
    return this.$fetch<T>({ path, method: "GET" });
  }
}

export const $fetch = new FetchClient();
