import TrainForm from '@/components/Train/TrainForm'
import React, { useState, useEffect } from 'react'

interface Checkbox {
    allRandom: boolean,
    styleRandom: boolean,
    progressionRandom: boolean,
    keyRandom: boolean,
    tempoRandom: boolean
}
const Train = () => {
    const [checkboxChecked, setCheckboxChecked] = useState<Checkbox>({
        allRandom: false,
        styleRandom: false,
        progressionRandom: false,
        keyRandom: false,
        tempoRandom: false
    })

    console.log(checkboxChecked)

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>): Promise<void> {
        // If allRandom is clicked
        if (e.target.id === 'allRandomCheckbox') {
            // Set allRandom to false if it was previously true
            if (checkboxChecked.allRandom) {
                setCheckboxChecked({
                    ...checkboxChecked,
                    allRandom: false,
                    styleRandom: false,
                    progressionRandom: false,
                    keyRandom: false,
                    tempoRandom: false
                })
            }
            // Set allRandom to true if it was previously false
            else if (!checkboxChecked.allRandom)
                setCheckboxChecked({
                    ...checkboxChecked,
                    allRandom: true,
                    styleRandom: true,
                    progressionRandom: true,
                    keyRandom: true,
                    tempoRandom: true
                })
        }
        else if (e.target.id === 'styleCheckbox') {
            setCheckboxChecked({
                ...checkboxChecked,
                styleRandom: !checkboxChecked.styleRandom
            })
        }
        else if (e.target.id === 'progressionCheckbox') {
            setCheckboxChecked({
                ...checkboxChecked,
                progressionRandom: !checkboxChecked.progressionRandom
            })
        }
        else if (e.target.id === 'keyCheckbox') {
            setCheckboxChecked({
                ...checkboxChecked,
                keyRandom: !checkboxChecked.keyRandom
            })
        }
        else if (e.target.id === 'tempoCheckbox') {
            setCheckboxChecked({
                ...checkboxChecked,
                tempoRandom: !checkboxChecked.tempoRandom
            })
        }
    }

    useEffect(() => {
        if (checkboxChecked.keyRandom && checkboxChecked.progressionRandom && checkboxChecked.styleRandom && checkboxChecked.tempoRandom) {
            setCheckboxChecked({
                ...checkboxChecked,
                allRandom: true
            })
        }
        else if (!checkboxChecked.keyRandom || !checkboxChecked.progressionRandom || !checkboxChecked.styleRandom || !checkboxChecked.tempoRandom) {
            setCheckboxChecked({
                ...checkboxChecked,
                allRandom: false
            })
        }
    }, [checkboxChecked.keyRandom, checkboxChecked.progressionRandom, checkboxChecked.styleRandom, checkboxChecked.tempoRandom])

    return (
        <section
            className='bg-cover h-screen md:py-12 md:flex md:justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen md:h-fit py-8 md:max-w-26 md:rounded md:pb-10'>
                <h2 className='text-2 font-semibold mb-5'>Pick your parameters</h2>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>
                    <input
                        type='checkbox'
                        id='allRandomCheckbox'
                        checked={checkboxChecked.allRandom ? true : false}

                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='allRandomCheckbox' className='text-dark'>Randomize all</label>
                </div>
                <TrainForm
                    handleChange={handleChange}
                    checkboxChecked={checkboxChecked}
                />
            </div>
        </section>
    )
}

export default Train