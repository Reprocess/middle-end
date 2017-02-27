import db from './db'

export default async (id) => {
  console.log('default export of get-item.js -> async function of get-item.js, outputs article.id -> ', id)
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
  console.log('observe function get-item.js, id -> ', id)
  const onval = (data) => fn(transform(data.val()))
  const item = db
    .child('item')
    .child(id)
  item.on('value', onval)
  return () => item.off('value', onval)
}

export function transform (article) {
  console.log('transform function get-item.js, article -> ', article)
  return {
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
}

export function transformFirebaseDataSnapshotValueToArray (dataSnapshotValue) {
    const array = Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
    return array
}
