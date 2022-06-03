import { Container } from '../../shared/ui/container'
import cn from 'classnames'

interface Props {
  items: { name: string; cat: string }[]
  setCategory: (c: string) => void
  category: string
}

export const CategoryGroup = ({ items, setCategory, category }: Props) => {
  return (
    <Container>
      <div className="flex justify-center items-center mt-5 md:justify-start">
        {items.map((action, idx) => (
          <button
            key={idx}
            onClick={() => setCategory(action.cat)}
            className="
              relative inline-flex items-center mr-2 justify-center p-0.5 overflow-hidden text-base font-medium text-gray-900 rounded-2xl group bg-gradient-to-br from-purple-700 to-blue-500  hover:text-white">
            <span
              className={cn(
                'h-full items-center py-2 px-4 xs:px-7  transition-all ease-in duration-75 bg-white  rounded-2xl group-hover:bg-opacity-0',
                {
                  'bg-gradient-to-br from-purple-700 to-blue-500 text-white':
                    action.cat === category,
                },
              )}>
              {action.name}
            </span>
          </button>
        ))}
      </div>
    </Container>
  )
}
