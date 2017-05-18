import RESPONSE_FROM from './database'
import { transformArticleMeta, transformResponseToArray } from './transforms'
import { setCookie, checkCookie } from './../utils/cookies'
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

  if(ids.val() !== null) {
    let comments = [];
    Object.keys(ids.val()).map(function(objectKey, index) {
      comments.push(ids.val()[objectKey]);
      comments[index].key = objectKey;
    });
    return comments;
  } else {
    return null;
  }
}

export async function popularityCheck(id) {

  console.log('here');

  if (!checkCookie(id)) {
    console.log('checked')
    const popularity = await RESPONSE_FROM
                                          .child(Refs.POPULARITY)
                                          .child(id)
                                          .once('value')
    if (popularity.val()) {
      console.log()
      const changePopularity = await RESPONSE_FROM
                                                  .child(Refs.POPULARITY)
                                                  .child(id)
                                                  .set(popularity.val() + 1);
      setCookie(id, 'true', 10000)
    } else {
      const changePopularity = await RESPONSE_FROM
                                                  .child(Refs.POPULARITY)
                                                  .child(id)
                                                  .set(1)
      setCookie(id, 'true', 10000)
    }
  } else {
    console.log('cookie exists')
  }

}

export async function getPopularityArticles() {

  console.log('Downloading popularity articles');
  const ids = await RESPONSE_FROM
                                .child(Refs.POPULARITY)
                                .orderByValue()
                                .limitToLast(10)
                                .once('value')

  const idsArray = []
  Object.keys(ids.val()).forEach((key, i) => {
    idsArray.push({popularity: ids.val()[key]})
    idsArray[i].key = key
  })

  idsArray.sort((value1, value2) => {
    return value2.popularity - value1.popularity
  })

  const articles = {}

  for(let i = 0; i < idsArray.length; i += 1) {
    const id = await RESPONSE_FROM
                                .child(Refs.TEASERS)
                                .child(idsArray[i].key)
                                .once('value')

    articles[idsArray[i].key] = id.val();
  }

  const transformedArticles = await Promise.all(
    transformResponseToArray(articles)
  )

  const result = transformedArticles.map(article => transformArticleMeta(article))

  return result

}
