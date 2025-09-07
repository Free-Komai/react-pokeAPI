export default function Button({ fetchData }) {
  return (
    <div className="flex justify-end p-5">
      <button
        type="button"
        onClick={() => fetchData()}
        className="cursor-pointer w-50 text-white font-bold rounded-3xl p-3 bg-black hover:opacity-80"
      >
        BINGOをまわす！
      </button>
    </div>
  );
}
