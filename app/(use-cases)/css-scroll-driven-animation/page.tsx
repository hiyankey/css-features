export default function Page() {
  return (
    <div className="min-h-dvh w-full">
      <div className="bg-amber-500 animate-grow-progress h-1 [animation-timeline:scroll()] fixed top-0 rounded-full" />
      <div className="max-w-[768px] mx-auto mt-[384px]">
        <h1 className="text-6xl animate-fade-out-down no-scroll-timeline:animate-none [animation-timeline:scroll()] [animation-range:0_300px]">
          Scroll driven animation is the future.
        </h1>
        <div className="w-full aspect-video bg-white/3 rounded-[4px] border border-white/5 animate-make-it-bigger no-scroll-timeline:animate-none [animation-timeline:\-\-card] [view-timeline-name:\-\-card] [animation-range:0%_60%]" />
      </div>
      <div className="h-[200vh] w-full" />
    </div>
  );
}
