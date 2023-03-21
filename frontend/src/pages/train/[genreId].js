import { useQuery } from '@apollo/client'
import React  from 'react'
 import {initializeApollo} from '../../../lib/apollo'
import {GENRE_BY_ID} from '../../../utils/queries'

const TrainDetails = ({queryID}) => {
console.log(queryID)
    const {data, loading, error} = useQuery(GENRE_BY_ID, {
      variables: {genreId: queryID}
    })

    console.log(data.genre)
  return (
    <div>[id]</div>
  )
}

export default TrainDetails
export const getServerSideProps = async({query}) => {
  const queryID = query.genreId

  const apolloClient = initializeApollo()
  await apolloClient.query({
      query: GENRE_BY_ID,
      variables: {genreId: queryID},
  })
  return {
      props: {initializeApolloState: apolloClient.cache.extract(), queryID}
  }
}