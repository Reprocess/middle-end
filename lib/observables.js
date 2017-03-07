import FIREBASE_DATABASE_RESPONSE_FROM from './firebase-db'
import { transformArticleMeta, transformArticleStory } from './transformations'
import firebaseRefs from '../config/firebase-refs'


export function observeArticlesMetaList (fn) {

  const requestData = () => fn()
  const firebaseRef = firebaseRefs.BLOG_HOME
  const list = FIREBASE_DATABASE_RESPONSE_FROM
                                            .child(firebaseRef)
  list.on('value', requestData)
  return () => list.off('value', requestData)
}

export function observeArticleMeta (id, fn) {

  const requestData = (data) => fn(transformArticleMeta(data.val()))
  const firebaseRef = firebaseRefs.BLOG_HOME
  return setupListener(firebaseRef, id, requestData)
}

export function observeArticleStory (id, fn) {

  const requestData = (data) => fn(data.val())
  const firebaseRef = firebaseRefs.ARTICLES
  const result = setupListener(firebaseRef, id, requestData)

  return setupListener(firebaseRef, id, requestData)
}

function setupListener (firebaseRef, id, requestData) {

  const item = FIREBASE_DATABASE_RESPONSE_FROM
                                            .child(firebaseRef)
                                            .child(id)
  item.on('value', requestData)
  return () => item.off('value', requestData)
}
