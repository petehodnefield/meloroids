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
      <div className='flex flex-col items-center mb-4'>
        <h3 className='text-1 font-semibold text-medium'>🎼 Chords (literal):</h3>
        <p className='text-2 font-semibold'>{chordsLiteral}</p>
      </div>
      <div className='flex flex-col items-center mb-4'>
        <h3 className='text-1 font-semibold text-medium'>🎼 Chords (numerals):</h3>
        <p className='text-2 font-semibold'>{chordsNumerals}</p>
      </div>
    </div>
  )
}

export default ProgressionQuery