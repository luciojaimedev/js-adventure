export const intVideo = () => {
  const $video = document.querySelector("[data-int-video]");

  $video.volume = 0.2;

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      $video.play();
    } else {
      $video.pause();
    }
  });

  const callBack = (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting) {
      $video.play();
    } else {
      $video.pause();
    }
  };

  const observer = new IntersectionObserver(callBack, {
    threshold: 0.5,
  });

  observer.observe($video);
};
