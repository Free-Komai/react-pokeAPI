import Ball from "./Ball";

export default function Stock({ stockNum }) {
  return (
    <div className="flex flex-wrap ml-5 p-3 mb-15">
      {stockNum.map((data, num) => (
        // <p
        //   key={num}
        //   className=" items-center p-3 text-white font-bold bg-red-600 border-4 border-black text-2xl w-15 text-center rounded-full"
        // >
        //   {data}
        // </p>
        <Ball key={num} num={data} size="small" />
      ))}
    </div>
  );
}
