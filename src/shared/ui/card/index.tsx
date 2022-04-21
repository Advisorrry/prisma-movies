import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  rating: number
  id: number
  posterPath: string
}

export const Card = ({ children, rating, posterPath, id }: Props) => {
  const posterImage = `${process.env.REACT_APP_IMAGE_W500_URL}${posterPath}`

  return (
    <div className="relative flex bg-white hover:bg-slate-100 duration-200 rounded-xl shadow-lg drop-shadow-xl">
      <Link to={String(id)}>
        <div className="mx-auto my-auto flex p-2 duration-200 ">
          <img className="rounded-lg" src={posterImage} alt="Постер" />
        </div>

        <div className="p-5">
          <h5 className="mb-2 flex justify-center text-base md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900">
            <Svg />
            <span>{rating}</span>
          </h5>

          <h4 className="mb-3 flex justify-center font-normal text-base md:text-xl  text-gray-700">
            <span>{children}</span>
          </h4>
        </div>
      </Link>
    </div>
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
