const Regions = require('../models/Region');
const RegionsType = require('./data/Regions/RegionsType');

let {
  // Здесь базовые типы GraphQL, которые нужны в этом уроке
  GraphQLList,
  GraphQLObjectType,
  // Этот класс нам нужен для создания схемы
  GraphQLSchema
} = require('graphql');

const BlogQueryRootType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: "Blog Application Schema Query Root",
  fields: () => ({
    regions: {
      type: new GraphQLList(RegionsType),
      description: "Список всех регионов",
      resolve: async () => await Regions.find({}, null, {
        sort: {label: 1}
      })
    },
  })
});

const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType
  /* Если вам понадобиться создать или
     обновить данные, вы должны использовать
     мутации.
     Мутации не будут изучены в этом посте.
     mutation: BlogMutationRootType
  */
});

module.exports = BlogAppSchema;