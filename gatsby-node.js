const createWork = require(`./gatsby/createWork`)
const createGalleries = require(`./gatsby/createGalleries`)
const createTeam = require(`./gatsby/createTeam`)
const createJournal = require(`./gatsby/createJournal`)

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql })
  await createGalleries({ actions, graphql })
  await createTeam({ actions, graphql })
  await createJournal({ actions, graphql })
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