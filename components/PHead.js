import BAvatar from './BAvatar'
import PTitle from './PTitle'
import BDate from './BDate'
import BCover from './BCover'

export default function PHead({ title, coverImage, date, author }) {
  return (
    <>
      <PTitle>{title}</PTitle>
      <div className="hidden md:block md:mb-12">
        <BAvatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <BCover title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <BAvatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <BDate dateString={date} />
        </div>
      </div>
    </>
  )
}
