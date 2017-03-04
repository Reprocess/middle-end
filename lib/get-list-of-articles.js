import db from './db'
import { transform, transformFirebaseDataSnapshotValueToArray } from './get-article'
import firebaseRefs from '../config/firebase-refs'

export default async (location = firebaseRefs.HOME) => {
  const ids = await db
                      .child(firebaseRefs.BLOG)
                      .child(location)
                      .once('value')
  const articles = await Promise.all(
    transformFirebaseDataSnapshotValueToArray(ids.val())
  )

  return articles.map(article => transform(article))
}
