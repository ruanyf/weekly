'use client'
import { use } from 'react';
import {Article} from "../../../components/Article";

export default function Weekly({params}) {
    const {number} = use(params)
    return <Article />
};