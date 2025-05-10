import { ReviewCard } from './review-card'

import ColtonImg from '../assets/images/image-colton.jpg'
import IreneImg from '../assets/images/image-irene.jpg'
import AnneImg from '../assets/images/image-anne.jpg'

const reviews = [
  {
    id: 1,
    name: "Colton Smith",
    imgUrl: ColtonImg,
    buyerType: "Verified Buyer",
    review: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    id: 2,
    name: "Irene Roberts",
    imgUrl: IreneImg,
    buyerType: "Verified Buyer",
    review: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    id: 3,
    name: "Anne Wallace",
    imgUrl: AnneImg,
    buyerType: "Verified Buyer",
    review: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  }
]

export const ReviewContainer = () => {

  const positionClases = [
    'xl:place-self-start',
    'xl:place-self-center',
    'xl:place-self-end'
  ]

  return (
    <div className='flex flex-col gap-4 xl:flex-row xl:h-[266px] xl:gap-7'>
      {
        reviews.map(({ id, name, imgUrl, buyerType, review}, index) => {
          return (
            <ReviewCard
              key={id}
              name={name}
              imgUrl={imgUrl}
              buyerType={buyerType}
              review={review}
              className={positionClases[index]}
            />
          )
        })
      }
    </div>
  )
}
