"use client";
const listOfCards = Array.from(
  [
    {
      title: "Fey",
      desc: "Fey turns complex data, gated tools, and noisy news into instant earnings alerts, clear summaries, and a beautiful interface—so anyone can stay informed, without feeling overwhelmed.",
    },
    {
      title: "Linear",
      desc: "Linear is a purpose-built tool for planning and building products",
    },
    {
      title: "Arc",
      desc: "Arc is the Chrome replacement I’ve been waiting for.",
    },
  ],
  ({ title, desc }, index) => ({ id: index, title, desc }),
);
export default function Page() {
  return (
    <div className="h-svh w-full relative flex items-center">
      <ul className="cards absolute -translate-x-1/2 left-1/2 w-[768px]">
        {listOfCards.map((card) => (
          <li
            key={card.id}
            className="card bg-[#121212] border border-[#fff]/8 rounded-[4px] p-4 h-[20px]"
          >
            <h3>{card.title}</h3>
            <p className="text-white/70">{card.desc}</p>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, auto) 1fr;
            gap: 8px;
          }

          .card {
            display: grid;
            grid-template-rows: subgrid;
            grid-row: span 3;
          }
        `}
      </style>
    </div>
  );
}
