interface GoToSlideParameters {
  maxIndex: number;
  currentIndex: number;
  setCurrentIndex: (newIndex: number) => void;
}

const leadingZeros = (value: number) => (value >= 10 ? value : `0${value}`);

const goToNext = ({ maxIndex, currentIndex, setCurrentIndex }: GoToSlideParameters) => {
  const isLastSlide = currentIndex === maxIndex;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;

  setCurrentIndex(newIndex);
};

const goToPrevious = ({ maxIndex, currentIndex, setCurrentIndex }: GoToSlideParameters) => {
  const isFirstSlide = currentIndex === 1;
  const newIndex = isFirstSlide ? maxIndex : currentIndex - 1;

  setCurrentIndex(newIndex);
};

export { goToNext, goToPrevious, leadingZeros };
