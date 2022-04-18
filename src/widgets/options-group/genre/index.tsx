import { Title } from '../../../shared/ui/title'

export const Genre = ({ handleClick }: any) => {
  return (
    <div onClick={handleClick}>
      <Title className="">жанр</Title>
    </div>
  )
}
