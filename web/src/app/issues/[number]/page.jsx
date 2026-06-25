'use client'
import { use } from 'react';
import {Article} from "../../../components/Article";
import {CONTENT} from "../../../article/generate/issue-1.mjs";

export default function Weekly({params}) {
    //寻找对应周刊

    const {number} = use(params)
    return <Article content={CONTENT} />
};