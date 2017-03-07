import RESPONSE_FROM from './database'
import Refs from './refs'

export default async (id) => {

  const articleSnapshot = await RESPONSE_FROM
                                            .child(Refs.ARTICLES)
                                            .child(id)
                                            .once('value')

  return articleSnapshot ? articleSnapshot.val() : null
}
