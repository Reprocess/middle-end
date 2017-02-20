import db from './db'
import { transform } from './get-item'

export default async (type = 'blog', { page=1, max=30 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
    .child(type)
    .once('value')

  console.log('get-articles -> ids.val', ids.val())

  const articles = await Promise.all(
    ids.val().slice(start, end).map(id => db
      .child('articles')
      .child(id)
      .once('value')
    )
  )

  return articles.map(obj => transform(obj.val()))

}
