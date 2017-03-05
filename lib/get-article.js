import FIREBASE_DATABASE_RESPONSE_FROM from './firebase-db'
import firebaseRefs from '../config/firebase-refs'

export default async (id) => {
  console.log('pages/article.js -> getArticle() -> id', id)
  const articleSnapshot = await FIREBASE_DATABASE_RESPONSE_FROM
                                                              .child(firebaseRefs.ARTICLES)
                                                              .child(id)
                                                              .once('value')
  const articleSnapshotValue = articleSnapshot.val()
  console.log('getArticle() -> articleSnapshotValue', articleSnapshotValue)
  return (articleSnapshotValue)
            ? articleSnapshotValue
            : null
}
