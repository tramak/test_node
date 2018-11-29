let {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLDirective
} = require('graphql');

let GraphQLLong = require('../../lib/graphql-type-long');

const RegionsType = new GraphQLObjectType({
  name: "Regions",
  description: "Регион",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLLong)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    zip: {
      type: GraphQLString
    },
    type: {
      type: new GraphQLNonNull(GraphQLString)
    },
    typeShort: {
      type: new GraphQLNonNull(GraphQLString)
    },
    okato: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});

module.exports = RegionsType;