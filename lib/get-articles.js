import db from './db'
import { transform } from './get-item'

export default async (type = 'blog', { page=1, max=12 } = {}) => {
  const start = max * (page - 1)
  const end = start + max - 1
  const ids = await db
                      .child(type)
                      .once('value')
  const articles = await Promise.all(
    transformFirebaseDataSnapshotValueToArray(ids.val())
  )
  console.log('am I invoked???')
  articles.map(item => console.log('article: before transform is invoked'))
  return articles.map(obj => transform(obj))
}

function transformFirebaseDataSnapshotValueToArray(dataSnapshotValue) {
    const array = Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key]; });
    return array
}
