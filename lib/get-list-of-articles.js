import db from './db'
import { transform, transformFirebaseDataSnapshotValueToArray } from './get-item'

export default async (type = 'blog', { page=1, max=12 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
                      .child(type)
                      .once('value')
  const articles = await Promise.all(
    transformFirebaseDataSnapshotValueToArray(ids.val())
  )
  console.log('get-list-of-articles.js -> articles about to be mapped and trasformed', articles)
  articles.map(article => console.log('article: before transform is invoked', article))
  return articles.map(article => transform(article))
}
