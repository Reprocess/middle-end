import db from './db'
import isEmpty from 'lodash.isempty'
import firebaseRefs from '../config/firebase-refs'

export default async (id) => {
  console.log('pages/article.js -> getArticle() -> id', id)
  const articleSnapshot = await db
    .child(firebaseRefs.ARTICLES)
    .child(id)
    .once('value')
  const articleSnapshotValue = articleSnapshot.val()
  console.log('getArticle() -> articleSnapshotValue', articleSnapshotValue)
  return (articleSnapshotValue)
            ? articleSnapshotValue
            : null
}

export function observe (id, type = 'teaser', fn) {
  console.log('get-article.js -> observe() -> id', id)
  console.log('get-article.js -> observe() -> type', type)
  const firebaseRef = type === 'teaser'
                                        ? firebaseRefs.BLOG_HOME
                                        : firebaseRefs.ARTICLES
  const onval = (data) => {
    const value = data.val()
    console.log('inside the the firebase change listener', value)
    return type === 'teaser'
                            ? fn(transform(value))
                            : fn(transformSingle(value))
  }
  const data = db
    .child(firebaseRef)
    .child(id)

  data.on('value', onval)
  return () => data.off('value', onval)
}

function transformSingle(value) {
  return (value) ? {
                      editorState: value.editorState
                    }
                    : null
}

export function transform (article) {

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
