import RapidApi from "./RapidApi";

class System {
  constructor() {
    this.rapidApi = new RapidApi(process.env.REACT_APP_RAPID_API);
    console.log(process.env.REACT_APP_RAPID_API);
  }
}

export default new System();
