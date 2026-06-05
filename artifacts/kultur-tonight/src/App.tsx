import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// English pages
import EnHomePage from "@/pages/en/index";
import GenevaPage from "@/pages/en/geneva/index";
import ThingsToDoPage from "@/pages/en/geneva/things-to-do-this-weekend";
import TheatrePage from "@/pages/en/geneva/theatre";
import ConcertsPage from "@/pages/en/geneva/concerts";
import FamilyEventsPage from "@/pages/en/geneva/family-events";
import VenuesListPage from "@/pages/en/geneva/venues/index";
import VenueDetailPage from "@/pages/en/geneva/venues/[slug]";
import EventsListPage from "@/pages/en/geneva/events/index";
import EventDetailPage from "@/pages/en/geneva/events/[slug]";
import BlogPage from "@/pages/en/blog/index";
import BlogDetailPage from "@/pages/en/blog/[slug]";

// French pages
import FrHomePage from "@/pages/fr/index";
import FrGenevePage from "@/pages/fr/geneve/index";
import FrThingsToDoPage from "@/pages/fr/geneve/que-faire-ce-weekend";
import FrTheatrePage from "@/pages/fr/geneve/theatre";
import FrConcertsPage from "@/pages/fr/geneve/concerts";
import FrFamilyEventsPage from "@/pages/fr/geneve/sorties-en-famille";
import FrVenuesListPage from "@/pages/fr/geneve/lieux/index";
import FrVenueDetailPage from "@/pages/fr/geneve/lieux/[slug]";
import FrEventsListPage from "@/pages/fr/geneve/evenements/index";
import FrEventDetailPage from "@/pages/fr/geneve/evenements/[slug]";
import FrBlogPage from "@/pages/fr/blog/index";
import FrBlogDetailPage from "@/pages/fr/blog/[slug]";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      {/* Root redirect */}
      <Route path="/">
        <Redirect to="/en" />
      </Route>

      {/* ── English routes ── */}
      <Route path="/en" component={EnHomePage} />
      <Route path="/en/geneva" component={GenevaPage} />
      <Route path="/en/geneva/things-to-do-this-weekend" component={ThingsToDoPage} />
      <Route path="/en/geneva/theatre" component={TheatrePage} />
      <Route path="/en/geneva/concerts" component={ConcertsPage} />
      <Route path="/en/geneva/family-events" component={FamilyEventsPage} />
      <Route path="/en/geneva/venues" component={VenuesListPage} />
      <Route path="/en/geneva/venues/:slug" component={VenueDetailPage} />
      <Route path="/en/geneva/events" component={EventsListPage} />
      <Route path="/en/geneva/events/:slug" component={EventDetailPage} />
      <Route path="/en/blog" component={BlogPage} />
      <Route path="/en/blog/:slug" component={BlogDetailPage} />

      {/* ── French routes ── */}
      <Route path="/fr" component={FrHomePage} />
      <Route path="/fr/geneve" component={FrGenevePage} />
      <Route path="/fr/geneve/que-faire-ce-weekend" component={FrThingsToDoPage} />
      <Route path="/fr/geneve/theatre" component={FrTheatrePage} />
      <Route path="/fr/geneve/concerts" component={FrConcertsPage} />
      <Route path="/fr/geneve/sorties-en-famille" component={FrFamilyEventsPage} />
      <Route path="/fr/geneve/lieux" component={FrVenuesListPage} />
      <Route path="/fr/geneve/lieux/:slug" component={FrVenueDetailPage} />
      <Route path="/fr/geneve/evenements" component={FrEventsListPage} />
      <Route path="/fr/geneve/evenements/:slug" component={FrEventDetailPage} />
      <Route path="/fr/blog" component={FrBlogPage} />
      <Route path="/fr/blog/:slug" component={FrBlogDetailPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
