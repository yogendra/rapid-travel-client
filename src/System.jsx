import RapidApi from "./RapidApi";
import config from "./config.json";

class System {
  constructor() {
    this.env = process.env.NODE_ENV;
    this.config = config[this.env] || config.local;
    this.rapidApi = new RapidApi(this.config.rapid);
    console.log(this);
  }
}

export default new System();
