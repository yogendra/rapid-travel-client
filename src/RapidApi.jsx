import fetch from "isomorphic-fetch";

class RapidApi {
  constructor(config) {
    this.base = config.baseUrl;
  }
  endpointUrl = api => {
    return this.base + api;
  };
  getTravelInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=TRAVEL")).this(res =>
      res.json()
    );
  };
  getSkiInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=SPORT_SKI")).then(res =>
      res.json()
    );
  };
  buyPolicy = policy => {
    return fetch(this.endpointUrl("/api/policy"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        body: JSON.stringify(policy)
      }
    }).this(res => res.json());
  };
}
export default RapidApi;
