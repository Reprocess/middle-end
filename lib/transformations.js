import isEmpty from 'lodash.isempty'

export function transformArticleMeta (article) {

  console.log('transformArticleMeta() -> article', article)
  return (article) ? {
                        id: article.id,
                        title: article.title,
                        lead: article.lead,
                        author: article.author,
                        date: article.date
                     }
                   : null
}

export function transformFirebaseDataSnapshotValueToArray (dataSnapshotValue) {
    return isEmpty(dataSnapshotValue)
      ? []
      : Object.keys(dataSnapshotValue).map(function (key) { return dataSnapshotValue[key] })
}
