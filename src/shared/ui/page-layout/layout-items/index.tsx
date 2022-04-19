import React from 'react'
import { Link } from 'react-router-dom'

const LayoutItems = () => {
  return (
    <Link to="213">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 min-h-28">
          <img className="rounded-lg" src="/assets/photo.jpg" alt="" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 flex items-center justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Svg />
            <span>7.4</span>
          </h5>

          <h4 className="mb-3 flex justify-center font-normal text-2xl text-gray-700 dark:text-gray-400">
            <span>123123</span>
          </h4>
        </div>
      </div>
    </Link>
  )
}

const Svg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  )
}

export default LayoutItems
