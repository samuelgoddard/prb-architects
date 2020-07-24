const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsTeam {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsTeam.edges.map(edge => {
        createPage({
          path: `studio/${edge.node.slug}`,
          component: path.resolve(`./src/templates/team.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })      
      resolve()
    })
  })
}