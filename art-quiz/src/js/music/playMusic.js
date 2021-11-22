import playList from "./playlist";

const playMusic = (state) => {
  let source;
  if (state) {
    source = playList[0].src;
  } else {
    source = playList[1].src;
  }
  const audio = new Audio(`${source}`);
  audio.play();
};

export default playMusic;
