import RESPONSE_FROM from './database'
import { transformArticleMeta, transformResponseToArray } from './transforms'
import Refs from './refs'

export async function getArticles (location = Refs.HOME) {

  const ids = await RESPONSE_FROM
                                .child(Refs.BLOG)
                                .child(location)
                                .once('value')
  const articles = await Promise.all(
    transformResponseToArray(ids.val())
  )

  const result = articles.map(article => transformArticleMeta(article))

  return result
}

export async function getArticle (id) {

  const articleSnapshot = await RESPONSE_FROM
                                            .child(Refs.ARTICLES)
                                            .child(id)
                                            .once('value')

  return articleSnapshot ? articleSnapshot.val() : null
}
