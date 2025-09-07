// eslint-disable-next-line no-unused-vars
import { motion, spring } from "motion/react";

export default function Data({ pokeData }) {
  return (
    <div className="m-auto">
      <div className="p-1">
        <p>◆{pokeData.species.name}</p>
      </div>
      <div className="flex justify-end w-[50vw] max-w-50 cursor-pointer">
        <motion.img
          src={pokeData.image}
          alt="image"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.5, type: spring }}
        />
      </div>
    </div>
  );
}
