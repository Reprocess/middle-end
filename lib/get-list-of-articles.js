import db from './db'
import { transform, transformFirebaseDataSnapshotValueToArray } from './get-article'

export default async (type = 'blog', { page=1, max=12 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
                      .child('blog')
                      .child(type)
                      .once('value')
  const articles = await Promise.all(
    transformFirebaseDataSnapshotValueToArray(ids.val())
  )

  return articles.map(article => transform(article))
}
