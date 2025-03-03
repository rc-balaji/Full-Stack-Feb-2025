const NavBar = () => {
  const listStyle = "text-[23px] m-[30px] text-[white] hover:border-b-3";
  const nav =
    "flex justify-between items-center p-5 bg-linear-to-r from-[#381DCF]  to-[#CF1512] w-[90%] ml-[5%] mt-[1%] rounded-[20px] fixed";

  return `
    <nav
        class="${nav}">
        <img class="h-[100px] rounded-[20px]" src="./logo.png" alt="LOGO" srcset="">
        <ol class="flex  gap-[10px]">
            <li class="${listStyle}"><a href="#home">Home</a></li>
            <li class="${listStyle}"><a href="#about">About</a></li>
            <li class="${listStyle}"><a href="#project">Project</a></li>
            <li class="${listStyle}"><a href="#contact">Contact</a></li>
        </ol>
    </nav>
      `;
};

export default NavBar;
