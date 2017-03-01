import db from './db'
import isEmpty from 'lodash.isempty'

export default async (id) => {
  const articleSnapshot = await db
    .child('item')
    .child(id)
    .once('value')
  const articleSnapshotValue = articleSnapshot.val()
  return (articleSnapshotValue)
            ? transform(articleSnapshotValue)
            : null
}

export function observe (id, fn) {
  const onval = (data) => fn(transform(data.val()))
  const article = db
    .child('item')
    .child(id)
  article.on('value', onval)
  console.log(fn)
  return () => item.off('value', onval)
}

export function transform (article) {
  return (article) ? {
                      id: article.id,
                      url: article.url,
                      user: article.by,
                      // time is seconds since epoch, not ms
                      date: new Date(article.time * 1000),
                      // sometimes `kids` is `undefined`
                      comments: article.kids || [],
                      commentsCount: article.descendants,
                      score: article.score,
                      title: article.title
                    }
                    : null
}

export function transformFirebaseDataSnapshotValueToArray (dataSnapshotValue) {
    console.log('1', dataSnapshotValue)
    return isEmpty(dataSnapshotValue)
      ? []
      : Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
}
