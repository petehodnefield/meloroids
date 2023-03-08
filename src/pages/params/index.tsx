import CopyPaste from '@/components/Params/CopyPaste'
import ParamsData from '@/components/Params/ParamsData'
import Timer from '@/components/Params/Timer'
import React from 'react'

const Params = () => {
    return (
        <div>
            <ParamsData />
            <CopyPaste />
            <Timer />
        </div>
    )
}

export default Params