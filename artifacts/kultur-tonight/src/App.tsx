import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// English pages — lazy loaded for route-level code splitting
const NotFound = lazy(() => import("@/pages/not-found"));
const EnHomePage = lazy(() => import("@/pages/en/index"));
const GenevaPage = lazy(() => import("@/pages/en/geneva/index"));
const ThingsToDoPage = lazy(() => import("@/pages/en/geneva/things-to-do-this-weekend"));
const TheatrePage = lazy(() => import("@/pages/en/geneva/theatre"));
const ConcertsPage = lazy(() => import("@/pages/en/geneva/concerts"));
const FamilyEventsPage = lazy(() => import("@/pages/en/geneva/family-events"));
const VenuesListPage = lazy(() => import("@/pages/en/geneva/venues/index"));
const VenueDetailPage = lazy(() => import("@/pages/en/geneva/venues/[slug]"));
const EventsListPage = lazy(() => import("@/pages/en/geneva/events/index"));
const EventDetailPage = lazy(() => import("@/pages/en/geneva/events/[slug]"));
const BlogPage = lazy(() => import("@/pages/en/blog/index"));
const BlogDetailPage = lazy(() => import("@/pages/en/blog/[slug]"));

// English blog sub-pages
const BlogGenevaPage = lazy(() => import("@/pages/en/blog/geneva/index"));
const BlogGenevaGuidesPage = lazy(() => import("@/pages/en/blog/geneva/guides/index"));
const BlogGenevaGuidesDetailPage = lazy(() => import("@/pages/en/blog/geneva/guides/[slug]"));
const BlogGenevaVenuesPage = lazy(() => import("@/pages/en/blog/geneva/venues/index"));
const BlogGenevaVenuesDetailPage = lazy(() => import("@/pages/en/blog/geneva/venues/[slug]"));
const BlogGenevaThisWeekPage = lazy(() => import("@/pages/en/blog/geneva/this-week/index"));
const BlogGenevaThisWeekDetailPage = lazy(() => import("@/pages/en/blog/geneva/this-week/[slug]"));
const BlogGenevaThisWeekendPage = lazy(() => import("@/pages/en/blog/geneva/this-weekend/index"));
const BlogGenevaThisWeekendDetailPage = lazy(() => import("@/pages/en/blog/geneva/this-weekend/[slug]"));
const BlogGenevaEventArticlesPage = lazy(() => import("@/pages/en/blog/geneva/events/index"));
const BlogGenevaEventArticleDetailPage = lazy(() => import("@/pages/en/blog/geneva/events/[slug]"));
const BlogGenevaSeasonalPage = lazy(() => import("@/pages/en/blog/geneva/seasonal/index"));
const BlogGenevaSeasonalDetailPage = lazy(() => import("@/pages/en/blog/geneva/seasonal/[slug]"));
const BlogGenevaCulturePage = lazy(() => import("@/pages/en/blog/geneva/culture/index"));
const BlogGenevaCultureDetailPage = lazy(() => import("@/pages/en/blog/geneva/culture/[slug]"));
const BlogGenevaFamilyPage = lazy(() => import("@/pages/en/blog/geneva/family/index"));
const BlogGenevaFamilyDetailPage = lazy(() => import("@/pages/en/blog/geneva/family/[slug]"));

// French pages
const FrHomePage = lazy(() => import("@/pages/fr/index"));
const FrGenevePage = lazy(() => import("@/pages/fr/geneve/index"));
const FrThingsToDoPage = lazy(() => import("@/pages/fr/geneve/que-faire-ce-weekend"));
const FrTheatrePage = lazy(() => import("@/pages/fr/geneve/theatre"));
const FrConcertsPage = lazy(() => import("@/pages/fr/geneve/concerts"));
const FrFamilyEventsPage = lazy(() => import("@/pages/fr/geneve/sorties-en-famille"));
const FrVenuesListPage = lazy(() => import("@/pages/fr/geneve/lieux/index"));
const FrVenueDetailPage = lazy(() => import("@/pages/fr/geneve/lieux/[slug]"));
const FrEventsListPage = lazy(() => import("@/pages/fr/geneve/evenements/index"));
const FrEventDetailPage = lazy(() => import("@/pages/fr/geneve/evenements/[slug]"));
const FrBlogPage = lazy(() => import("@/pages/fr/blog/index"));
const FrBlogDetailPage = lazy(() => import("@/pages/fr/blog/[slug]"));

// French blog sub-pages
const FrBlogGenevePage = lazy(() => import("@/pages/fr/blog/geneve/index"));
const FrBlogGenevaGuidesPage = lazy(() => import("@/pages/fr/blog/geneve/guides/index"));
const FrBlogGenevaGuidesDetailPage = lazy(() => import("@/pages/fr/blog/geneve/guides/[slug]"));
const FrBlogGenevaLieuxPage = lazy(() => import("@/pages/fr/blog/geneve/lieux/index"));
const FrBlogGenevaLieuxDetailPage = lazy(() => import("@/pages/fr/blog/geneve/lieux/[slug]"));
const FrBlogGenEvaCetteSemainePage = lazy(() => import("@/pages/fr/blog/geneve/cette-semaine/index"));
const FrBlogGenevaCetteSemaineDetailPage = lazy(() => import("@/pages/fr/blog/geneve/cette-semaine/[slug]"));
const FrBlogGenevaCeWeekendPage = lazy(() => import("@/pages/fr/blog/geneve/ce-weekend/index"));
const FrBlogGenevaCeWeekendDetailPage = lazy(() => import("@/pages/fr/blog/geneve/ce-weekend/[slug]"));
const FrBlogGenevaEvenementsPage = lazy(() => import("@/pages/fr/blog/geneve/evenements/index"));
const FrBlogGenevaEvenementsDetailPage = lazy(() => import("@/pages/fr/blog/geneve/evenements/[slug]"));
const FrBlogGenevaSaisonnierPage = lazy(() => import("@/pages/fr/blog/geneve/saisonnier/index"));
const FrBlogGenevaSaisonnierDetailPage = lazy(() => import("@/pages/fr/blog/geneve/saisonnier/[slug]"));
const FrBlogGenevaCulturePage = lazy(() => import("@/pages/fr/blog/geneve/culture/index"));
const FrBlogGenevaCultureDetailPage = lazy(() => import("@/pages/fr/blog/geneve/culture/[slug]"));
const FrBlogGenevaFamillePage = lazy(() => import("@/pages/fr/blog/geneve/famille/index"));
const FrBlogGenevaFamilleDetailPage = lazy(() => import("@/pages/fr/blog/geneve/famille/[slug]"));

// Utility pages
const EnAboutPage = lazy(() => import("@/pages/en/about"));
const EnContactPage = lazy(() => import("@/pages/en/contact"));
const FrAboutPage = lazy(() => import("@/pages/fr/a-propos"));
const FrContactPage = lazy(() => import("@/pages/fr/contact"));

const queryClient = new QueryClient();

export function Router() {
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
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Router />
          </Suspense>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
