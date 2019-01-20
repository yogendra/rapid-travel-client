import RapidApi from "./RapidApi";
import config from "./config.json";

class System {
  constructor(env) {
    this.isProd = process.env.NODE_ENV === "production";
    this.config = this.isProd ? config.production : config.development;
    this.rapidApi = new RapidApi(this.config.rapid);
  }
}

export default new System();
