const NavBar = () => {
  const listStyle = "text-[23px] m-[30px] text-[white] hover:border-b-3";
  const nav =
    "flex justify-between items-center p-5 bg-gradient-to-r from-[#381DCF]  to-[#CF1512] w-[90%] ml-[5%] mt-[1%] rounded-[20px] fixed transition-all duration-600"; // Added transition classes

  // The function to handle scroll behavior
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY === 0) {
        navbar.style.width = "100%";
        navbar.style.marginLeft = "0";
        navbar.style.borderRadius = "0";
        navbar.style.marginTop = "0";
      } else {
        navbar.style.width = "90%";
        navbar.style.marginLeft = "5%";
        navbar.style.borderRadius = "20px";
        navbar.style.marginTop = "1%";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Semi-transparent background when scrolling
      }
    }
  };

  // Set up the scroll event listener once the DOM is loaded
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the navbar style based on scroll position
  });

  return `
    <nav id="navbar" class="${nav}">
        <img class="h-[100px] rounded-[20px]" src="./logo.png" alt="LOGO">
        <ol class="flex gap-[10px]">
            <li class="${listStyle}"><a href="#home">Home</a></li>
            <li class="${listStyle}"><a href="#about">About</a></li>
            <li class="${listStyle}"><a href="#project">Project</a></li>
            <li class="${listStyle}"><a href="#contact">Contact</a></li>
        </ol>
    </nav>
  `;
};

export default NavBar;
