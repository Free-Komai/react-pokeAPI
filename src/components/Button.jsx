export default function Button({ fetchData }) {
  return (
    <>
      <button
        type="button"
        onClick={() => fetchData()}
        className="cursor-pointer p-3 border-2 w-20 border-amber-500 bg-cyan-700"
      >
        Button
      </button>
    </>
  );
}
