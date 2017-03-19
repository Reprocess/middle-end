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
