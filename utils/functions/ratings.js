export const rating = (rating) => {
  switch (true) {
    case rating === 1:
      return "/images/icons/one-star.svg";
    case rating === 2:
      return "/images/icons/two-star.svg";
    case rating === 3:
      return "/images/icons/three-star.svg";
    case rating === 4:
      return "/images/icons/four-star.svg";
    case rating === 5:
      return "/images/icons/five-star.svg";
  }
};
