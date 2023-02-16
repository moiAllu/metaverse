'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full glassmorphism3 " />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full glassmorphism3" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full glassmorphism3" />
        </div>
        <div className="absolute top-1/2 left-[10%] w-[217px] h-[167px] p-[6px] rounded-2xl  bg-[#5D6680]">
          <img src="/card2.png" alt="people" className={`w-full h-full object-cover rounded-3xl glassmorphism2`}  />
          <h3 className =" -mt-10 ml-4 font-semibold text-[18px] text-white absolute z-1">
             The Upside Down
          </h3>
        </div>
        <div className="absolute top-10 right-[15%] w-[217px] h-[167px] p-[6px] rounded-2xl  bg-[#5D6680] ">
          <img src="/card1.png" alt="people" className={`w-full h-full object-cover rounded-3xl glassmorphism4`}  />
          <h3 className =" -mt-10 ml-4 font-semibold text-[18px] text-white absolute z-1">
             Hawkins labs
          </h3>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;