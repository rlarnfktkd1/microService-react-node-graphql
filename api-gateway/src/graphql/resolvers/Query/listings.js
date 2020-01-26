import ListingService from "#root/adapters/ListingService";

const listingResolver = async () => {
  return await ListingService.fetchAllListing();
};

export default listingResolver;
