import db from './db'
import { transform } from './get-item'

export default async (type = 'blog', { page=1, max=12 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
                      .child(type)
                      .once('value')
  const data = ids.val()
  console.log('data', data)
  const articles = await Promise.all(
    Object.keys(data).map(key => data[key])
  )
  console.log('articles', articles)
  console.log(articles.map(obj => transform(obj)))
  return articles.map(obj => transform(obj))
}
