import React, { useState, useEffect, memo } from 'react'

interface Props {
  totalPages: number
  currentPage: number
  setPage: (p: number) => void
}

export const Pagination: React.FC<Props> = memo(({ setPage, totalPages, currentPage }) => {
  let [num, setNum] = useState(1)
  let [current, setCurrent] = useState(currentPage)

  useEffect(() => {
    setPage(current)
  }, [current, setPage])

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
    { page: num + 4 },
  ]
  function onNext() {
    if (num > totalPages - 4) return
    setNum(++num)
  }
  function onBack() {
    num > 1 && setNum(--num)
  }
  return (
    <div className="flex justify-center mt-3 bg-white rounded-lg">
      <button
        onClick={onBack}
        className="h-12 border-2 border-r-0 border-indigo-400
               px-4 rounded-l-lg hover:bg-indigo-400 hover:text-white">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>
      {pages.map((pg, i) => (
        <button
          key={i}
          onClick={() => setCurrent(pg.page)}
          className={`h-12 border-2 border-r-0 border-indigo-400
               w-12 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out ${
                 current === pg.page && 'bg-indigo-400 text-white'
               }`}>
          {pg.page}
        </button>
      ))}
      <button
        onClick={onNext}
        className="h-12 border-2  border-indigo-400
               px-4 rounded-r-lg hover:bg-indigo-400 hover:text-white">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
})
