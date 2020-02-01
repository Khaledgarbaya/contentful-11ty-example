const { createClient } = require('contentful')
const client = createClient({
  space: '<space-id>',
  accessToken: '<delivery-token>'
})
module.exports = async function() {
  const posts = await client.getEntries({
    content_type: 'blogPost'
  })

  return posts.items.map(entry => entry.fields)
}
