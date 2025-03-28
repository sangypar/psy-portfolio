// import '@/app/globals.css'
// import Menubar from './components/Menubar'
// import Title from './components/Title'
// import Intro from './components/Intro'
// import Career from './components/Career'
// import Skill from './components/Skill'
// import Project from './components/Project'
// import Footer from './components/Footer'

// export default function Home() {
//   return (
//     <div className="h-screen overflow-hidden"> 
//       <nav className="fixed top-0 left-0 right-0 z-50 h-12 bg-custom-dark">
//         <Menubar />
//       </nav>
//       <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
//         <section id="title" className="h-screen snap-start pt-12">
//           <Title />
//         </section>
//         <section id="intro" className="h-screen snap-start pt-12">
//           <Intro />
//         </section>
//         <section id="career" className="h-screen snap-start pt-12">
//           <Career />
//         </section>
//         <section id="skill" className="h-screen snap-start pt-12">
//           <Skill />
//         </section>
//         <section id="project" className="h-screen snap-start pt-12">
//           <Project />
//         </section>
//         <section id="footer" className="h-screen snap-start pt-12">
//           <Footer />
//         </section>
//       </main>
//     </div>
//   )
// }

import '@/app/globals.css'
import Menubar from './components/Menubar'
import Title from './components/Title'
import Intro from './components/Intro'
import Career from './components/Career'
import Skill from './components/Skill'
import Project from './components/Project'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden"> 
      <nav className="fixed top-0 left-0 right-0 z-50 h-12 bg-custom-dark">
        <Menubar />
      </nav>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <section id="title" className="h-screen snap-start pt-12">
          <Title />
        </section>
        <section id="intro" className="h-screen snap-start pt-12">
          <Intro />
        </section>
        <section id="career" className="h-screen snap-start pt-12">
          <Career />
        </section>
        <section id="skill" className="h-screen snap-start pt-12">
          <Skill />
        </section>
        <section id="project" className="min-h-screen snap-start pt-12">
          <Project />
          <div id="footer" className="mt-8">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
}