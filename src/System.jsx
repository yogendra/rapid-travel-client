import RapidApi from "./RapidApi";

class System {
  constructor(env) {
    this.rapidApi = new RapidApi(env.rapid);
  }
  rapidApi = () => {
    return this.rapidApi;
  };
}

export default new System({
  rapid: {
    baseUrl: "http://localhost:8080"
  }
});
