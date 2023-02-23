import React from 'react'

const TrainCards = () => {
    return (
        <article className="flex flex-col gap-4 px-6">
            <div className="bg-primary text-white rounded flex flex-col items-center">
                <h4 className="text-white">🤔</h4>
                <h3>Analysis Paralysis</h3>
                <p>Meloroids pulls the key, tempo, and chord progression from an actual song by the selected artist. Elimates the analysis paralysis that comes with loop making.</p>
            </div>
            <div className="bg-primary text-white rounded flex flex-col items-center">
                <h4 className="text-white">🤔</h4>
                <h3>1000+ MIDI</h3>
                <p>Meloroids instantly provides you a MIDI file of the selected chord progression to give initial inspiration.</p>
            </div>
            <div className="bg-primary text-white rounded flex flex-col items-center">
                <h4 className="text-white">🤔</h4>
                <h3>20+ Artists</h3>
                <p>Meloroids focuses on rappers with small-mid size followings. Targeting these artists increase your odds of a placement. New artists get added every week.</p>
            </div>
        </article>
    )
}

export default TrainCards