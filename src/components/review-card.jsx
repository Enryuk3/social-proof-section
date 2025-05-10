export const ReviewCard = ({name, imgUrl, buyerType, review, className}) => {
  return (
    <div className={`bg-very-dark-magenta rounded-lg text-light-grayish-magenta px-8 pt-10 pb-8 xl:w-[350px] xl:h-[234px] ${className}`}>
      <div className="flex gap-6 mb-6">
        <img className="size-10 rounded-full" src={imgUrl} alt={name} />
        <div className="text-[1.0625rem]/[1.2rem]">
          <p className="font-bold">{name}</p>
          <p className="text-soft-pink">{buyerType}</p>
        </div>

      </div>
      <p className="font-medium xl:text-[16.3px]">{review}</p>
    </div>
  )
}
