import db from './db'
import { transform } from './get-item'

export default async (type = 'blog', { page=1, max=12 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
                      .child(type)
                      .once('value')
  const data = await ids
                      .val()

  const articles = await Promise.all(
    Object.keys(ids.val()).map((key) => {
      console.log('ids.val', ids.val)
      console.log('ids.val[key]', ids.val[key])
      return ids.val()[key]
    })
  )

  return articles.map(obj => transform(obj))
}
