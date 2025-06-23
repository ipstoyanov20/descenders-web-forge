
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import PhysicsControls from "./pages/news/PhysicsControls";
import ProceduralGeneration from "./pages/news/ProceduralGeneration";
import ExtremeStunts from "./pages/news/ExtremeStunts";
import CommunitySpotlight from "./pages/news/CommunitySpotlight";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/news/mastering-physics-controls" element={<PhysicsControls />} />
          <Route path="/news/procedural-world-generation" element={<ProceduralGeneration />} />
          <Route path="/news/extreme-stunts-guide" element={<ExtremeStunts />} />
          <Route path="/news/community-spotlight" element={<CommunitySpotlight />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
