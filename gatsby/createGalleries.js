const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWorkCategory {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsWorkCategory.edges.map(edge => {
        createPage({
          path: `gallery/${edge.node.slug}`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: edge.node.slug,
          },
        })
      })      
      resolve()
    })
  })
}