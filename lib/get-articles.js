import FIREBASE_DATABASE_RESPONSE_FROM from './firebase-db'
import { transformArticleMeta, transformFirebaseDataSnapshotValueToArray } from './transformations'
import firebaseRefs from '../config/firebase-refs'

export default async (location = firebaseRefs.HOME) => {

  const ids = await FIREBASE_DATABASE_RESPONSE_FROM
                                                  .child(firebaseRefs.BLOG)
                                                  .child(location)
                                                  .once('value')
  const articles = await Promise.all(
    transformFirebaseDataSnapshotValueToArray(ids.val())
  )

  return articles.map(article => transformArticleMeta(article))
}
