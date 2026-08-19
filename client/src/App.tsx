/* Style reminder: Route wrapper for a soft-girl kawaii apology story; preserve narrow portrait pacing and calm chapter transitions. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AcknowledgmentPage, FromHeartPage, LetterPage, LittleThingsPage, WelcomePage } from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
  return <Switch>
    <Route path="/" component={WelcomePage} />
    <Route path="/welcome" component={WelcomePage} />
    <Route path="/acknowledgment" component={AcknowledgmentPage} />
    <Route path="/little-things" component={LittleThingsPage} />
    <Route path="/from-heart" component={FromHeartPage} />
    <Route path="/letter" component={LetterPage} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>;
}
