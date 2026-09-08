import { createFileRoute, notFound } from "@tanstack/react-router";
import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { getServiceBySlug } from "@/components/services/serviceDetails";
import NotFound from "@/pages/NotFound";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceSlugRoute,
  notFoundComponent: () => <NotFound />,
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return pageHead({
        title: "Our Services | AI Development, Custom Software & Mobile Apps",
        description:
          "Explore Code Envision Technologies' services: AI development, AI chatbots, predictive models, custom software, machine learning, NLP, computer vision, web development, mobile apps, and UI/UX design.",
        path: `/services/${params.slug}`,
      });
    }
    return pageHead({
      title: `${service.name} Services | Code Envision Technologies`,
      description: service.heroSubtitle,
      path: `/services/${service.slug}`,
    });
  },
});

function ServiceSlugRoute() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);
  if (!service) {
    throw notFound();
  }
  return <ServiceDetailPage service={service} />;
}
