import RESPONSE_FROM from './database'
import { transformArticleMeta, transformResponseToArray } from './transforms'
import Refs from './refs'

export async function getArticles (location = Refs.HOME) {

  const ids = await RESPONSE_FROM
                                .child(Refs.TEASERS)
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

export async function getAllArticles () {

  const ids = await RESPONSE_FROM
                                .child(Refs.TEASERS)
                                .once('value')

  let articles = [];

  Object.values(ids.val()).forEach((article) => {
    articles.push(article)
  });

  const result = articles.map(article => transformArticleMeta(article))

  return result;
}

export async function getAllCategories() {

  const ids = await RESPONSE_FROM
                                .child(Refs.CATEGORIES)
                                .once('value')

  return ids.val();
}
