import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = ({ backgroundColor, borderColor, textColor }) => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={733}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            <span className='text-coral-red inline-block mt-3'>Special </span>{' '}
            Offer
          </span>
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Discover the world of Nike, where innovation meets style. From iconic
          classics to cutting-edge designs, Nike offers footwear that elevates
          your performance and fashion game.
        </p>
        <p className='mt-4 lg:max-w-lg info-text'>
          For a limited time, enjoy a 30% discount on all shoes. Click the
          button to step into comfort, style, and savings with Nike.
        </p>

        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label='Shop Now' />
          <Button
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
