export default function Ball({ num }) {
  return (
    <div>
      <div className="relative w-30 h-15">
        <div className="absolute pt-1 font-bold bg-red-600 border-4 border-b-2 border-black w-30 h-15 text-center rounded-tl-full rounded-tr-full"></div>

        <div className="absolute bg-white border-4 border-t-2 border-black w-30 h-15 rounded-bl-full rounded-br-full top-15 left-0"></div>

        <div className="absolute border-3 border-black bg-white size-5 top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="absolute border-3 border-black size-2.5 top-[100%] left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 text-4xl text-white transform -translate-x-1/2 -translate-y-1/2">
          {num}
        </div>
      </div>
    </div>
  );
}
