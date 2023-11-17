import { Get } from "./CallApi";

export default async function GetMarket() {
      let response;
      let link = `v1/mkt/markets/`

      response = await Get({
            link,
            config: {
            },
      });
      if (response.status) {
            return response.data
      }

}