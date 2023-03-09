import TrainForm from '@/components/Train/TrainForm'
import React, { useState, useEffect } from 'react'

const Train = () => {
    const [checkboxChecked, setCheckboxChecked] = useState({
        allRandom: false,
        styleRandom: false,
        progressionRandom: false,
        keyRandom: false,
        tempoRandom: false
    })

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
                    allRandom: true
                })
        }
    }

    // Monitor when allCheck changes
    useEffect(() => {
        // if allRandom is true, then set everything else to be true
        if (checkboxChecked.allRandom) {
            setCheckboxChecked({
                ...checkboxChecked,
                styleRandom: true,
                progressionRandom: true,
                keyRandom: true,
                tempoRandom: true
            })
        }
        // if allRandom is false, then set everything else to be false
        else {
            setCheckboxChecked({
                ...checkboxChecked,
                styleRandom: false,
                progressionRandom: false,
                keyRandom: false,
                tempoRandom: false
            })
        }
    }, [checkboxChecked.allRandom])


    return (
        <section
            className='bg-cover h-screen md:py-12 md:flex md:justify-center'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)` }}
        >
            <div className='bg-white flex flex-col items-center w-full h-screen md:h-fit py-8 md:max-w-26 md:rounded md:pb-10'>
                <h2 className='text-2 font-semibold mb-5'>Pick your parameters</h2>
                {/* Custom Checkbox */}
                <div className='checkbox-container'>
                    <input type='checkbox' id='allRandomCheckbox'
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='allRandomCheckbox' className='text-dark'>Randomize all</label>
                </div>
                <TrainForm />
            </div>
        </section>
    )
}

export default Train