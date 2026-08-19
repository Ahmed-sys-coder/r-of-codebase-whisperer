import { createFileRoute, notFound } from "@tanstack/react-router";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/components/services/serviceDetails";
import NotFound from "@/pages/NotFound";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceSlugRoute,
  notFoundComponent: () => <NotFound />,
});

function ServiceSlugRoute() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);
  if (!service) {
    throw notFound();
  }
  return <ServiceDetailPage service={service} />;
}
