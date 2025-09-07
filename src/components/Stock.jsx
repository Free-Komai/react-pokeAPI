import Ball from "./Ball";

export default function Stock({ stockNum, num }) {
  return (
    <div className="flex flex-wrap ml-[5vw] p-3 mb-15 w-[90vw]">
      {stockNum
        .filter((n) => n !== Number(num))
        .map((data, n) => (
          <Ball key={n} num={data} size="small" />
        ))}
    </div>
  );
}
