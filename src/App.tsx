import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DarkVeil from "@/components/DarkVeil";
import ExpertisePage from "./pages/ExpertisePage";
import CertificationsPage from "./pages/CertificationsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <div className="relative z-10">
        <HomePage />
        <AboutPage />
        <ExpertisePage/>
        <CertificationsPage/>
        <ProjectsPage/>
      </div>
    </div>
  )
}

export default App
