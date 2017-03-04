import db from './db'
import isEmpty from 'lodash.isempty'

export default async (id) => {
  console.log('getArticle() -> id', id)
  const articleSnapshot = await db
    .child('articles')
    .child(id)
    .once('value')
  const articleSnapshotValue = articleSnapshot.val()
  console.log('getArticle() -> articleSnapshotValue', articleSnapshotValue)
  return (articleSnapshotValue)
            ? articleSnapshotValue
            : null
}

export function observe (id, fn) {
  console.log('get-article.js -> observe()')
  const onval = (data) => fn(transform(data.val()))
  const article = db
    .child('blog')
    .child('home')
    .child(id)
  article.on('value', onval)
  return () => article.off('value', onval)
}

export function transform (article) {
  if (article) { console.log('transform() -> article', article) }
  return (article) ? {
                      id: article.id,
                      title: article.title,
                      lead: article.lead,
                      author: article.author,
                      date: article.date
                    }
                    : null
}

export function transformFirebaseDataSnapshotValueToArray (dataSnapshotValue) {
    return isEmpty(dataSnapshotValue)
      ? []
      : Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
}
