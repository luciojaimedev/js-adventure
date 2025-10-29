export const scrollSpy = () => {
  // Agarramos todas las secciones que queremos observar
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  // Esto es lo que yo quiero hacer
  const callBack = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const $link = document.querySelector(`a[data-scroll-spy][href="#${id}"]`);

      if (!$link) return;

      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("scroll-active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("scroll-active");
      }
    });
  };

  // Aca hay que crear el observer, nos pide 2 argumentos, el primero la funcion de callback y el segundo options
  const observer = new IntersectionObserver(callBack, {
    threshold: [0.5, 0.75],
  });

  // Ahora recorremos cada seccion y le decimos a nuestro observer que vigile cada una de ellas
  $sections.forEach((el) => observer.observe(el));
};
