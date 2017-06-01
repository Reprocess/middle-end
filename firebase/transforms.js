import isEmpty from 'lodash.isempty'

export function transformArticleMeta (article) {

  return (article) ? {
                        id: article.id,
                        title: article.title,
                        lead: article.lead,
                        author: article.author,
                        date: article.date,
                        teaser: article.teaser
                     }
                   : null
}

export function transformResponseToArray (dataSnapshotValue) {
    return isEmpty(dataSnapshotValue)
      ? []
      : Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
}

export function transformPopularityArticlesToArray(object) {
  const array = [];

  Object.keys(object).forEach((key, index) => {
    array.push({popularity: object[key]});
    array[index].key = key;
  });

  return array;
}

export function sortArticlesByPopularityDescending(article1, article2) {
  return article2.popularity - article1.popularity;
}
