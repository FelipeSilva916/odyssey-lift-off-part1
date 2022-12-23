const { RESTDatasource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDatasource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }
  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`authors/${authorId}`);
  }
}

module.exports = TrackAPI;
