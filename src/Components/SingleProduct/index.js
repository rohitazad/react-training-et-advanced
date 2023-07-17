import React from 'react';
import { Link } from 'react-router-dom';
const SingleProudctItem = ({data})=>{
    return (
        <>
            <Link to="/" className="group bg-slate-200 p-1">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-400 p-2">
                    <img src={data.images[0]}  alt={data.title} className=" w-36 group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Price :- ${data.price}</p>
            </Link>
        </>
    )
}
export default SingleProudctItem