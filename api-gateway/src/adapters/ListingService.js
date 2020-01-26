import got from "got";

const LISTINGS_SERVICE_URI = "http://listing-service:7100";

export default class ListingService {
  static async fetchAllListing() {
    const body = await got.get(`${LISTINGS_SERVICE_URI}/listing`).json();
    return body;
  }
}
