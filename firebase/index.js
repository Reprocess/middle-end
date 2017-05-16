import RESPONSE_FROM from './database'
import { transformArticleMeta, transformResponseToArray } from './transforms'
import Refs from './refs'

export async function getArticles (location = 'home') {

  const ids = await RESPONSE_FROM
                                .child(Refs.TEASERS)
                                .orderByChild('category')
                                .equalTo(location)
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

export async function getComments(id) {
  
  const ids = await RESPONSE_FROM
                                .child(Refs.COMMENTS)
                                .child(id)
                                .once('value')

  let comments = [];
  Object.keys(ids.val()).map(function(objectKey, index) {
    comments.push(ids.val()[objectKey]);
    comments[index].key = objectKey;
  });

  return comments;
}
