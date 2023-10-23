import React from "react";
import { New } from '../entities/news.entity'

const News = (props: New) => {
    return <div className="grid justify-items-center rounded-2xl shadow-xl max-w-lg hover:bg-sky-800 p-5 bg-sky-500/30 mb-3 transition duration-700 ease-in-out">
        <p className="text-xl pb-4 text-slate-100">{props.title}</p>
        <img className="max-w-md grayscale hover:grayscale-0" src={props.urlToImage}/>
    </div>
    ;
}

export default News