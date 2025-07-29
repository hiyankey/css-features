"use client";

export default function Page() {
  return (
    <div className="h-svh w-full relative flex items-center">
      <ul className="wrapper absolute -translate-x-1/2 left-1/2 w-[768px]">
        {Array.from({ length: 3 }, (_, idx) => ({ id: idx })).map((card) => (
          <li key={card.id} className="slide  h-[240px] px-.5 overflow-clip">
            <div className="w-full h-full bg-[#121212] border border-[#fff]/8 rounded-[12px] p-2">
              <div className="banner bg-amber-500 w-full h-[20%] rounded-[8px] "></div>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template-columns: 4fr 1fr 1fr;
            gap: 8px;
            transition: grid-template-columns 800ms
              cubic-bezier(0.22, 0.61, 0.36, 1);
          }

          .wrapper:has(.slide:nth-child(1):hover) {
            grid-template-columns: 4fr 1fr 1fr;
          }

          .wrapper:has(.slide:nth-child(2):hover) {
            grid-template-columns: 1fr 4fr 1fr;
          }

          .wrapper:has(.slide:nth-child(3):hover) {
            grid-template-columns: 1fr 1fr 4fr;
          }
          .banner {
            opacity: 0;
            transform: translateY(-100%);
            transition:
              opacity,
              transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
          }
          .slide:hover .banner {
            opacity: 1;
            transform: translateY(0%);
            transition-delay: 200ms;
          }
          .slide:nth-child(1):not(:has(~ .slide:hover)) .banner {
            opacity: 1;
            transform: translateY(0%);
          }
        `}
      </style>
    </div>
  );
}
