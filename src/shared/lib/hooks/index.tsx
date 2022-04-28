import { useState } from 'react'

interface Props {
  totalPages: number
  initPage: number
}

export const usePagination = (totalPages: number, initPage: number = 1) => {
  const [page, setPage] = useState<number>(initPage)

  const currentPage = (c: number) => {
    setPage(c)
  }

  return {
    setPage,
    totalPages,
    currentPage,
  }
}
