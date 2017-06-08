import RESPONSE_FROM from './database'
import {
  transformArticleMeta,
  transformResponseToArray,
  transformPopularityArticlesToArray,
  sortArticlesByPopularityDescending,
} from './transforms'
import { setCookie, checkCookie } from './../utils/cookies'
import Refs from './refs'

export async function getArticles (location = 'home', orderBy = 'category') {
  const ids = await RESPONSE_FROM
                                .child(Refs.TEASERS)
                                .orderByChild(orderBy)
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

export async function getPageOfArticles(page = 1) {

  const ids = await RESPONSE_FROM
                                .child(Refs.TEASERS)
                                .orderByValue()
                                .limitToLast(page * 10)
                                .once('value')

  let articles = [];

  Object.values(ids.val()).forEach((article) => {
    articles.push(article)
  });

  articles = articles.reverse();

  const articlesArray = articles.slice((page - 1) * 10);

  const result = articlesArray.map(article => transformArticleMeta(article))

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
                                .orderByChild('articleKey')
                                .equalTo(id)
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

export async function getCommentsForSidebar() {
  const ids = await RESPONSE_FROM
                                 .child(Refs.COMMENTS)
                                 .limitToLast(4)
                                 .once('value')

  if(ids.val() !== null) {
    let comments = [];
    Object.keys(ids.val()).map(function(objectKey, index) {
      comments.push(ids.val()[objectKey]);
      comments[index].key = objectKey;
    });
    comments.forEach(comment => {
      if (comment.comment.length > 110) {
        comment.comment = comment.comment.substring(110, -1) + '...';
      }
    })
    return comments;
  } else {
    return null;
  }
}

export async function popularityCheck(id) {

  if (!checkCookie(id)) {
    const popularity = await RESPONSE_FROM
                                          .child(Refs.POPULARITY)
                                          .child(id)
                                          .once('value')
    if (popularity.val()) {
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
  }

}

export async function getPopularityArticles() {
  const popularityArticlesTeasers = await getPopularityArticlesTeasers();
  const transformedArticles = await Promise.all(transformResponseToArray(popularityArticlesTeasers));
  return transformedArticles.map(article => transformArticleMeta(article));
}

async function getSortedArticlesArray() {
  const articlesKeys = await getMostPopularArticlesKeys();
  if (articlesKeys) {
    const idsArray = transformPopularityArticlesToArray(articlesKeys);
    idsArray.sort(sortArticlesByPopularityDescending);
    return idsArray;
  }
}

async function getMostPopularArticlesKeys() {
  const ids = await RESPONSE_FROM
                                .child(Refs.POPULARITY)
                                .orderByValue()
                                .limitToLast(10)
                                .once('value');
  return ids.val();
}

async function getPopularityArticlesTeasers() {
  const sortedArticles = await getSortedArticlesArray();
  const articles = {};
  for(let i = 0; i < sortedArticles.length; i += 1) {
    const id = await RESPONSE_FROM
                                  .child(Refs.TEASERS)
                                  .child(sortedArticles[i].key)
                                  .once('value');
    articles[sortedArticles[i].key] = id.val();
  };
  return articles;
}

export async function getAllTags() {
  const ids = await RESPONSE_FROM
                                .child(Refs.TAGS)
                                .once('value')

  return ids.val();
}
