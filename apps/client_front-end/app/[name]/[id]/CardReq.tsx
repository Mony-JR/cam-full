import React from 'react'

const CardReq: React.FC = () => {
    return (
        <div className='w-full flex flex-col justify-center p-3 bg-white rounded-md shadow-md pl-4 pr-4 '>
            <div className='flex flex-col gap-4 w-full p-2 justify-between '>
                <h2 className='text-xl font-semibold'>Position Requirement</h2>
                <ul className='list-disc text-sm w-full pl-6'>
                    <li className=''>{"At least at 3rd year’s student of Bachelor Degrees in psychology, banking, management, or related field."}</li>
                    <li>No experience required Computer literacy </li>
                    <li> Good command in English </li>
                    <li>Critical thinking, communication,  </li>
                    <li>Good coordination   </li>
                    <li>Good Presentation and negotiation skills and good interpersonal relations </li>
                    <li>Understand basic life insurance concepts   </li>
                    <li>Able to work under pressure  </li>
                </ul>
            </div>
        </div>
    )
}

export default CardReq
