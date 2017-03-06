import FIREBASE_DATABASE_RESPONSE_FROM from './firebase-db'
import firebaseRefs from '../config/firebase-refs'

export default async (id) => {

  const articleSnapshot = await FIREBASE_DATABASE_RESPONSE_FROM
                                                              .child(firebaseRefs.ARTICLES)
                                                              .child(id)
                                                              .once('value')

  return articleSnapshot.val()
}
