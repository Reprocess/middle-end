import db from './db'
import isEmpty from 'lodash.isempty'

export default async (id) => {
  console.log('getArticle() -> id', id)
  const articleSnapshot = await db
    .child('item')
    .child(id)
    .once('value')
  const articleSnapshotValue = articleSnapshot.val()
  console.log('getArticle() -> articleSnapshotValue', articleSnapshotValue)
  return (articleSnapshotValue)
            ? transform(articleSnapshotValue)
            : null
}

export function observe (id, fn) {
  console.log('get-article.js -> observe()')
  const onval = (data) => fn(transform(data.val()))
  const article = db
    .child('item')
    .child(id)
  article.on('value', onval)
  return () => item.off('value', onval)
}

export function transform (article) {
  if (article) { console.log('transform() -> article', article) }
  return (article) ? {
                      id: article.id,
                      url: article.url,
                      user: article.by,
                      // time is seconds since epoch, not ms
                      date: article.date,
                      // sometimes `kids` is `undefined`
                      comments: article.kids || [],
                      commentsCount: article.descendants,
                      score: article.score,
                      title: article.title
                    }
                    : null
}

export function transformFirebaseDataSnapshotValueToArray (dataSnapshotValue) {
    return isEmpty(dataSnapshotValue)
      ? []
      : Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
}
