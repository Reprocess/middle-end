import FIREBASE_DATABASE_RESPONSE_FROM from './firebase-db'
import { transformArticleStory, transformFirebaseDataSnapshotValueToArray } from './transformations'
import firebaseRefs from '../config/firebase-refs'

export default async (id) => {

  const articleSnapshot = await FIREBASE_DATABASE_RESPONSE_FROM
                                                              .child(firebaseRefs.ARTICLES)
                                                              .child(id)
                                                              .once('value')
  console.log('getArticle -> articleSnapshot.val()', articleSnapshot.val())

  const result = articleSnapshot ? articleSnapshot.val() : null

  return result
}
