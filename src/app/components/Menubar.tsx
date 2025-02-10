"use client";

const Menubar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <nav className="flex gap-8">
        <button 
          onClick={() => scrollToSection('title')}
          className="hover:text-blue-600 transition-colors"
        >
          Title
        </button>
        <button 
          onClick={() => scrollToSection('intro')}
          className="hover:text-blue-600 transition-colors"
        >
          Intro
        </button>
        <button 
          onClick={() => scrollToSection('career')}
          className="hover:text-blue-600 transition-colors"
        >
          Career
        </button>
        <button 
          onClick={() => scrollToSection('skill')}
          className="hover:text-blue-600 transition-colors"
        >
          Skill
        </button>
        <button 
          onClick={() => scrollToSection('project')}
          className="hover:text-blue-600 transition-colors"
        >
          Project
        </button>
        <button 
          onClick={() => scrollToSection('footer')}
          className="hover:text-blue-600 transition-colors"
        >
          Footer
        </button>
      </nav>
    </div>
  );
};

export default Menubar;