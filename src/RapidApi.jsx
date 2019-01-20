class RapidApi {
  constructor(config) {
    this.base = config.baseUrl;
  }
  endpointUrl = api => {
    return this.base + api;
  };
  getTravelInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=TRAVEL"));
  };
  getSkiInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=SPORT_SKI"));
  };
}
export default RapidApi;
