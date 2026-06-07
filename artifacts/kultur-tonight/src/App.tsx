import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NewsletterPopup } from "@/components/NewsletterPopup";
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

// English blog sub-pages
import BlogGenevaPage from "@/pages/en/blog/geneva/index";
import BlogGenevaGuidesPage from "@/pages/en/blog/geneva/guides/index";
import BlogGenevaGuidesDetailPage from "@/pages/en/blog/geneva/guides/[slug]";
import BlogGenevaVenuesPage from "@/pages/en/blog/geneva/venues/index";
import BlogGenevaVenuesDetailPage from "@/pages/en/blog/geneva/venues/[slug]";
import BlogGenevaThisWeekPage from "@/pages/en/blog/geneva/this-week/index";
import BlogGenevaThisWeekDetailPage from "@/pages/en/blog/geneva/this-week/[slug]";
import BlogGenevaThisWeekendPage from "@/pages/en/blog/geneva/this-weekend/index";
import BlogGenevaThisWeekendDetailPage from "@/pages/en/blog/geneva/this-weekend/[slug]";
import BlogGenevaEventArticlesPage from "@/pages/en/blog/geneva/events/index";
import BlogGenevaEventArticleDetailPage from "@/pages/en/blog/geneva/events/[slug]";
import BlogGenevaSeasonalPage from "@/pages/en/blog/geneva/seasonal/index";
import BlogGenevaSeasonalDetailPage from "@/pages/en/blog/geneva/seasonal/[slug]";
import BlogGenevaCulturePage from "@/pages/en/blog/geneva/culture/index";
import BlogGenevaCultureDetailPage from "@/pages/en/blog/geneva/culture/[slug]";
import BlogGenevaFamilyPage from "@/pages/en/blog/geneva/family/index";
import BlogGenevaFamilyDetailPage from "@/pages/en/blog/geneva/family/[slug]";

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

// French blog sub-pages
import FrBlogGenevePage from "@/pages/fr/blog/geneve/index";
import FrBlogGenevaGuidesPage from "@/pages/fr/blog/geneve/guides/index";
import FrBlogGenevaGuidesDetailPage from "@/pages/fr/blog/geneve/guides/[slug]";
import FrBlogGenevaLieuxPage from "@/pages/fr/blog/geneve/lieux/index";
import FrBlogGenevaLieuxDetailPage from "@/pages/fr/blog/geneve/lieux/[slug]";
import FrBlogGenEvaCetteSemainePage from "@/pages/fr/blog/geneve/cette-semaine/index";
import FrBlogGenevaCetteSemaineDetailPage from "@/pages/fr/blog/geneve/cette-semaine/[slug]";
import FrBlogGenevaCeWeekendPage from "@/pages/fr/blog/geneve/ce-weekend/index";
import FrBlogGenevaCeWeekendDetailPage from "@/pages/fr/blog/geneve/ce-weekend/[slug]";
import FrBlogGenevaEvenementsPage from "@/pages/fr/blog/geneve/evenements/index";
import FrBlogGenevaEvenementsDetailPage from "@/pages/fr/blog/geneve/evenements/[slug]";
import FrBlogGenevaSaisonnierPage from "@/pages/fr/blog/geneve/saisonnier/index";
import FrBlogGenevaSaisonnierDetailPage from "@/pages/fr/blog/geneve/saisonnier/[slug]";
import FrBlogGenevaCulturePage from "@/pages/fr/blog/geneve/culture/index";
import FrBlogGenevaCultureDetailPage from "@/pages/fr/blog/geneve/culture/[slug]";
import FrBlogGenevaFamillePage from "@/pages/fr/blog/geneve/famille/index";
import FrBlogGenevaFamilleDetailPage from "@/pages/fr/blog/geneve/famille/[slug]";

// Utility pages
import EnAboutPage from "@/pages/en/about";
import EnContactPage from "@/pages/en/contact";
import FrAboutPage from "@/pages/fr/a-propos";
import FrContactPage from "@/pages/fr/contact";

const queryClient = new QueryClient();

function PopupWrapper() {
  const [location] = useLocation();
  const lang: "en" | "fr" = location.startsWith("/fr") ? "fr" : "en";
  return <NewsletterPopup lang={lang} />;
}

function Router() {
  return (
    <>
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

        {/* English blog — specific routes before wildcard */}
        <Route path="/en/blog/geneva/guides/:slug" component={BlogGenevaGuidesDetailPage} />
        <Route path="/en/blog/geneva/guides" component={BlogGenevaGuidesPage} />
        <Route path="/en/blog/geneva/venues/:slug" component={BlogGenevaVenuesDetailPage} />
        <Route path="/en/blog/geneva/venues" component={BlogGenevaVenuesPage} />
        <Route path="/en/blog/geneva/this-week/:slug" component={BlogGenevaThisWeekDetailPage} />
        <Route path="/en/blog/geneva/this-week" component={BlogGenevaThisWeekPage} />
        <Route path="/en/blog/geneva/this-weekend/:slug" component={BlogGenevaThisWeekendDetailPage} />
        <Route path="/en/blog/geneva/this-weekend" component={BlogGenevaThisWeekendPage} />
        <Route path="/en/blog/geneva/events/:slug" component={BlogGenevaEventArticleDetailPage} />
        <Route path="/en/blog/geneva/events" component={BlogGenevaEventArticlesPage} />
        <Route path="/en/blog/geneva/seasonal/:slug" component={BlogGenevaSeasonalDetailPage} />
        <Route path="/en/blog/geneva/seasonal" component={BlogGenevaSeasonalPage} />
        <Route path="/en/blog/geneva/culture/:slug" component={BlogGenevaCultureDetailPage} />
        <Route path="/en/blog/geneva/culture" component={BlogGenevaCulturePage} />
        <Route path="/en/blog/geneva/family/:slug" component={BlogGenevaFamilyDetailPage} />
        <Route path="/en/blog/geneva/family" component={BlogGenevaFamilyPage} />
        <Route path="/en/blog/geneva" component={BlogGenevaPage} />
        <Route path="/en/blog/:slug" component={BlogDetailPage} />
        <Route path="/en/blog" component={BlogPage} />
        <Route path="/en/about" component={EnAboutPage} />
        <Route path="/en/contact" component={EnContactPage} />

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

        {/* French blog — specific routes before wildcard */}
        <Route path="/fr/blog/geneve/guides/:slug" component={FrBlogGenevaGuidesDetailPage} />
        <Route path="/fr/blog/geneve/guides" component={FrBlogGenevaGuidesPage} />
        <Route path="/fr/blog/geneve/lieux/:slug" component={FrBlogGenevaLieuxDetailPage} />
        <Route path="/fr/blog/geneve/lieux" component={FrBlogGenevaLieuxPage} />
        <Route path="/fr/blog/geneve/cette-semaine/:slug" component={FrBlogGenevaCetteSemaineDetailPage} />
        <Route path="/fr/blog/geneve/cette-semaine" component={FrBlogGenEvaCetteSemainePage} />
        <Route path="/fr/blog/geneve/ce-weekend/:slug" component={FrBlogGenevaCeWeekendDetailPage} />
        <Route path="/fr/blog/geneve/ce-weekend" component={FrBlogGenevaCeWeekendPage} />
        <Route path="/fr/blog/geneve/evenements/:slug" component={FrBlogGenevaEvenementsDetailPage} />
        <Route path="/fr/blog/geneve/evenements" component={FrBlogGenevaEvenementsPage} />
        <Route path="/fr/blog/geneve/saisonnier/:slug" component={FrBlogGenevaSaisonnierDetailPage} />
        <Route path="/fr/blog/geneve/saisonnier" component={FrBlogGenevaSaisonnierPage} />
        <Route path="/fr/blog/geneve/culture/:slug" component={FrBlogGenevaCultureDetailPage} />
        <Route path="/fr/blog/geneve/culture" component={FrBlogGenevaCulturePage} />
        <Route path="/fr/blog/geneve/famille/:slug" component={FrBlogGenevaFamilleDetailPage} />
        <Route path="/fr/blog/geneve/famille" component={FrBlogGenevaFamillePage} />
        <Route path="/fr/blog/geneve" component={FrBlogGenevePage} />
        <Route path="/fr/blog/:slug" component={FrBlogDetailPage} />
        <Route path="/fr/blog" component={FrBlogPage} />
        <Route path="/fr/a-propos" component={FrAboutPage} />
        <Route path="/fr/contact" component={FrContactPage} />

        {/* Trailing slash aliases */}
        <Route path="/en/" component={EnHomePage} />
        <Route path="/en/geneva/" component={GenevaPage} />
        <Route path="/en/geneva/events/" component={EventsListPage} />
        <Route path="/en/geneva/venues/" component={VenuesListPage} />
        <Route path="/en/blog/geneva/" component={BlogGenevaPage} />
        <Route path="/en/blog/geneva/guides/" component={BlogGenevaGuidesPage} />
        <Route path="/fr/" component={FrHomePage} />
        <Route path="/fr/geneve/" component={FrGenevePage} />

        <Route component={NotFound} />
      </Switch>
      <PopupWrapper />
    </>
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
