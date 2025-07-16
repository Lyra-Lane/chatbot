import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/language-context";
import Home from "@/pages/home";

function App() {
  return (
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Home />
      </LanguageProvider>
    </TooltipProvider>
  );
}

export default App;
