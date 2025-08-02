"use client";
import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "@/app/ui/icons/chevron";

const slides = Array.from({ length: 12 }, (_, id) => ({ id }));

const slideWidth = 320;
const slideMargin = 16;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};
export default function Page() {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);
  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current?.scrollLeft -
        sliderRef.current?.clientWidth ===
      0
    );
  }, [sliderPosition]);
  const goToPrevious = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);
  const goToNext = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);
  return (
    <div className="min-h-dvh w-full py-16">
      <h2 className="font-medium text-6xl max-w-[768px] mx-auto">
        CSS scroll snap the future{" "}
      </h2>
      <div className="h-[400px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            console.log(sliderPosition);
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex pb-10 mt-16 overflow-x-auto snap-x snap-mandatory"
        >
          {slides.map((slide) => (
            <li
              key={slide.id}
              className="snap-start snap-always shrink-0 mr-4 last:mr-0"
            >
              <div className="relative slide-center bg-white/3 aspect-square rounded-2xl w-[320px]  border-white/5 border h-full"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPrevious()}
          type="button"
          className="disabled:text-[#595959] p-2 rounded-full border border-white/5 bg-white/3 size-10 inline-flex items-center justify-center "
        >
          <span className="sr-only">Previous</span>
          <Chevron className="size-4" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length - 1}
          onClick={() => goToNext()}
          type="button"
          className="p-2 disabled:text-[#595959] rounded-full border border-white/5 bg-white/3 size-10 inline-flex items-center justify-center "
        >
          <span className="sr-only">Next</span>
          <Chevron className="rotate-180 size-4" />
        </button>
      </div>
    </div>
  );
}
