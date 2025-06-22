import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "@/pages/Dashboard";
import Auth from "@/pages/Auth";
import Wiki from "@/pages/Wiki";
import Wikiconnection from "@/pages/Wiki/wikiconnection";
import Navbar from "@/components/navbar";

import Providers from "@/components/providers";
// import ProtectedRoute from "@/components/protected-route";
import Wikicommunautes from "./pages/Wiki/wikicommunautes";
import Saintdeniscommu from "./pages/Wiki/communautes/saintdeniscommu";
import Blackwatercommu from "./pages/Wiki/communautes/blackwatercommu";
import Wikilore from "./pages/Wiki/wikilore";
import Team from "./components/typo/Team";
import Videos from "./pages/Videos";


function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="*" element={<Auth />} />
            <Route path="/" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/wiki" element={<Wiki />} />
          <Route path="/wiki/wikiconnection" element={<Wikiconnection />} />
          <Route path="/wiki/wikicommunautes" element={<Wikicommunautes />} />
          <Route path="/wiki/Saintdeniscommu" element={<Saintdeniscommu />} />
          <Route path="/wiki/Blackwatercommu" element={<Blackwatercommu />} />
          <Route path="/wiki/wikilore" element={<Wikilore />} />
          <Route path="/Auth/Discord" element={<Dashboard />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
