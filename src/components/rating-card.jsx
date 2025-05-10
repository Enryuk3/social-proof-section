import StarImg from '../assets/images/icon-star.svg'

export const RatingCard = ({text, className}) => {
  return (
      <div className={`bg-light-grayish-magenta rounded-lg p-4 xl:flex xl:w-[445px] xl:justify-center xl:gap-8 xl:items-center ${className}`}>
      <div className='flex gap-2 place-content-center mb-4 xl:mb-0'>
        <img className="size-4" src={StarImg} alt="star icon" />
        <img className="size-4" src={StarImg} alt="star icon" />
        <img className="size-4" src={StarImg} alt="star icon" />
        <img className="size-4" src={StarImg} alt="star icon" />
        <img className="size-4" src={StarImg} alt="star icon" />
      </div>
      <p className='text-center text-[1.0625rem] text-very-dark-magenta font-bold'>{text}</p>
    </div>
  )
}
