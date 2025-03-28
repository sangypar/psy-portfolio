"use client";

const Menubar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'title', label: 'TITLE' },
    { id: 'intro', label: 'INTRO' },
    { id: 'career', label: 'CAREER' },
    { id: 'skill', label: 'SKILL' },
    { id: 'project', label: 'PROJECT' },
    { id: 'footer', label: 'ABOUT ME' }
  ];

  return (
    <div className="flex justify-between items-center h-full font-paperlogy px-4">
      <button 
        onClick={() => scrollToSection('title')}
        className="text-xl text-white"
      >
        PSY-PORTFOLIO
      </button>
      <nav className="flex gap-8">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-white relative group"
          >
            <span className="relative">
              {item.label}
              <span className="absolute left-0 bottom-[-6px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Menubar;