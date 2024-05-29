const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources } ) => {
            return dataSources.trackAPI.getTracksforHome();
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources}, info) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    }
};

module.export = resolvers;