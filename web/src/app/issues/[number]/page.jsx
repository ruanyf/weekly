'use client'
import { use } from 'react';

export default function Weekly({params}) {
    const {number} = use(params)
    return <div className='text-cyan'>
        <h1>{number}</h1>
    </div>
};