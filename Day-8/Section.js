function Section(id, name) {
  const sectionHTML = `
    <div class="border border-black h-[100vh] flex justify-center items-center" id="${id}">
        <h1 >${name} Page</h1>
    </div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById(id);

    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.style.borderBottom = "2px solid white";
              window.location.href = "#" + id;
              console.log(name);
            } else {
              section.style.borderBottom = "2px solid white";
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
    }
  });

  return sectionHTML;
}

export default Section;
