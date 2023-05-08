interface GoToSlideParameters {
  sliderArray: unknown[];
  currentIndex: number;
  setCurrentIndex: (newIndex: number) => void;
}

const leadingZeros = (value: number) => (value >= 10 ? value : `0${value}`);

const goToNext = ({ sliderArray, currentIndex, setCurrentIndex }: GoToSlideParameters) => {
  const isLastSlide = currentIndex === sliderArray.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;

  setCurrentIndex(newIndex);
};

const goToPrevious = ({ sliderArray, currentIndex, setCurrentIndex }: GoToSlideParameters) => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? sliderArray.length - 1 : currentIndex - 1;

  setCurrentIndex(newIndex);
};

export { goToNext, goToPrevious, leadingZeros };
