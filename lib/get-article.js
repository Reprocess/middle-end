import db from './db'

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
  const item = db
    .child('item')
    .child(id)
  item.on('value', onval)

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
    const array = Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
    return array
}
