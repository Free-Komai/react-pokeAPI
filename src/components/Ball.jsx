// eslint-disable-next-line no-unused-vars
import { motion, spring } from "motion/react";

export default function Ball({ num, size }) {
  return (
    <motion.div
      className="p-3 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {size === "big" && (
        <div className="relative w-[40vw] h-[20vw] max-w-50 max-h-25">
          <div className="absolute pt-1 font-bold bg-red-600 border-6 border-b-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 text-center rounded-tl-full rounded-tr-full"></div>
          {num > 15 && (
            <div className="absolute pt-1 font-bold bg-blue-600 border-6 border-b-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 30 && (
            <div className="absolute pt-1 font-bold bg-yellow-600 border-6 border-b-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 45 && (
            <div className="absolute pt-1 font-bold bg-green-600 border-6 border-b-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 60 && (
            <div className="absolute pt-1 font-bold bg-purple-600 border-6 border-b-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          <div className="absolute bg-white border-6 border-t-3 border-black w-[40vw] h-[20vw] max-w-50 max-h-25 rounded-bl-full rounded-br-full top-[100%] left-0"></div>

          <div className="absolute border-4 border-black bg-white size-10 top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute border-3 border-black size-5 top-[100%] left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-2/5 left-1/2 text-5xl text-white transform -translate-x-1/2 -translate-y-1/2">
            {num}
          </div>
        </div>
      )}
      {size === "small" && (
        <div className="relative w-[20vw] h-[10vw] max-w-30 max-h-15">
          <div className="absolute pt-1 font-bold bg-red-600 border-4 border-b-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 text-center rounded-tl-full rounded-tr-full"></div>
          {num > 15 && (
            <div className="absolute pt-1 font-bold bg-blue-600 border-4 border-b-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 30 && (
            <div className="absolute pt-1 font-bold bg-yellow-600 border-4 border-b-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 45 && (
            <div className="absolute pt-1 font-bold bg-green-600 border-4 border-b-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          {num > 60 && (
            <div className="absolute pt-1 font-bold bg-purple-600 border-4 border-b-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 text-center rounded-tl-full rounded-tr-full"></div>
          )}
          <div className="absolute bg-white border-4 border-t-2 border-black w-[20vw] h-[10vw] max-w-30 max-h-15 rounded-bl-full rounded-br-full top-[100%] left-0"></div>

          <div className="absolute border-3 border-black bg-white size-3 top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div
            className="absolute border-2
           border-black size-1.5 top-[100%] left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div className="absolute top-2/5 left-1/2 text-3xl text-white transform -translate-x-1/2 -translate-y-1/2">
            {num}
          </div>
        </div>
      )}
    </motion.div>
  );
}
