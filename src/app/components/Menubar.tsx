"use client";

const Menubar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between items-center h-full font-paperlogy px-4">
      <button 
          onClick={() => scrollToSection('title')}
          className="text-xl text-white "
        >
           PSY-PORTFOLIO
        </button>
      <nav className="flex gap-8">
        <button 
          onClick={() => scrollToSection('title')}
          className="hover:text-custom-blue transition-colors text-white"
        >
          TITLE
        </button>
        <button 
          onClick={() => scrollToSection('intro')}
          className="hover:text-custom-blue transition-colors text-white"
        >
          INTRO
        </button>
        <button 
          onClick={() => scrollToSection('career')}
          className="hover:text-custom-blue transition-colors text-white"
        >
          CAREER
        </button>
        <button 
          onClick={() => scrollToSection('skill')}
          className="hover:text-custom-blue transition-colors text-white"
        >
          SKILL
        </button>
        <button 
          onClick={() => scrollToSection('project')}
          className="hover:text-custom-blue transition-colors text-white" 
        >
          PROJECT
        </button>
        <button 
          onClick={() => scrollToSection('footer')}
          className="hover:text-custom-blue transition-colors text-white"
        >
        ABOUT ME
        </button>
      </nav>
    </div>
  );
};

export default Menubar;