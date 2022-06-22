const calculateInnerBorderDegrees = (itemsLength) => {
  switch (itemsLength) {
    case 4:
      return "white 0deg,white 52.5deg,transparent 52.5deg,transparent 127deg,white 127deg,white 180.5deg";
    case 6:
      return "white 0deg,white 33.25deg,transparent 33.25deg,transparent 87deg,white 87deg,white 120deg";
    case 8:
      return "white 0deg,white 23.9deg,transparent 23.9deg,transparent 66deg,white 66deg,white 90deg";
    case 10:
      return "white 0deg,white 19deg,transparent 19deg,transparent 53deg,white 53deg,white 72deg";
    case 12:
      return "white 0deg,white 16deg,transparent 16deg,transparent 44deg,white 44deg,white 60deg";
    case 14:
      return "white 0deg,white 14deg,transparent 14deg,transparent 38deg,white 38deg,white 51deg";
    case 16:
      return "white 0deg,white 12deg,transparent 12deg,transparent 33.5deg,white 33.5deg,white 45deg";

    default:
      break;
  }
};

export default calculateInnerBorderDegrees;
