import RESPONSE_FROM from './database'
import { transformArticleMeta } from './transforms'
import Refs from './refs'


export function observeArticlesMetaList (fn) {

  const requestData = () => fn()
  const Ref = Refs.TEASERS
  return setupFirebaseArticlesListener(Ref, requestData)
}

export function observeArticleMeta (id, fn) {

  const requestData = (data) => fn(transformArticleMeta(data.val()))
  const Ref = Refs.TEASERS
  return setupFirebaseIdListener(Ref, id, requestData)
}

export function observeArticleStory (id, fn) {

  const requestData = (data) => fn(data.val())
  const Ref = Refs.ARTICLES
  const result = setupFirebaseIdListener(Ref, id, requestData)

  return setupFirebaseIdListener(Ref, id, requestData)
}

function setupFirebaseIdListener (Ref, id, requestData) {

  const item = RESPONSE_FROM
                            .child(Ref)
                            .child(id)
  item.on('value', requestData)
  return () => item.off('value', requestData)
}

function setupFirebaseArticlesListener (Ref, requestData) {

  const list = RESPONSE_FROM
                            .child(Ref)
  list.on('value', requestData)
  return () => list.off('value', requestData)
}
