import React from 'react'
import { useQuery } from '@apollo/client';
import { PROGRESSION_BY_ID } from 'utils/queries';

interface Props {
  progressionId: string,
  keyName: string
}

const ProgressionQuery = ({ progressionId, keyName }: Props) => {
  const {
    data: progressionData,
    loading: progressionLoading,
    error: progressionError,
  } = useQuery(PROGRESSION_BY_ID, {
    variables: { progressionId: progressionId },
  });

  if (progressionLoading) return <div>Loading...</div>

  const progressionKey = progressionData.progression.all_keys.filter(
    (progression: any) => progression.key === keyName
  );
  const chordsLiteral = progressionKey[0].progression_in_key;
  const chordsNumerals = progressionData.progression.numerals;

  return (
    <div>
      <p>Chords (literal): {chordsLiteral}</p>
      <p>Chords (numerals): {chordsNumerals}</p>
    </div>
  )
}

export default ProgressionQuery