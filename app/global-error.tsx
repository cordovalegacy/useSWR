"use client"

import { useEffect } from 'react'

const globalError = ({ err, reset }: { err:any, reset: any }) => {

    useEffect(() => console.log("Error ----->", err), [err])

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl p-4 m-4">Woops! Something went wrong..{err}</h1>
            <button
                className="bg-blue-500 text-white rounded-md p-1"
                onClick={() => reset()}
            >Try Again</button>
        </div>
    )
}

export default globalError
