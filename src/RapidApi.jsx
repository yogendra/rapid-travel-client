class RapidApi {
  constructor(config) {
    this.base = config.baseUrl;
  }
  endpointUrl = api => {
    return this.base + api;
  };
  getTravelInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=TRAVEL"))
      .this(res => res.json())
      .then(products => {
        return products.map(p => {
          p.largeBanner =
            "/assets/images/insurance/" + p.type + "/banner-large.jpg";
          return p;
        });
      });
  };
  getSkiInsurance = () => {
    return fetch(this.endpointUrl("/api/products?type=SPORT_SKI"))
      .then(res => res.json())
      .then(products => {
        return products.map(p => {
          p.largeBanner =
            "/assets/images/insurance/" + p.type + "/banner-large.jpg";
          console.log(p);
          return p;
        });
      });
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
