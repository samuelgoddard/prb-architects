const createWork = require(`./gatsby/createWork`)
const createGalleries = require(`./gatsby/createGalleries`)

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql })  
  await createGalleries({ actions, graphql })  
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}