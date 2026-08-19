import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiFirebase,
  SiOpenai,
  SiDocker,
  SiGithub,
  SiVercel,
  SiFastapi,
  SiRedis,
  SiSocketdotio,
  SiD3,
  SiCloudinary,
  SiTypescript,
  SiJavascript,
  SiFlutter,
  SiStripe,
  SiTensorflow,
  SiGooglecloud,
  SiDotnet,
  SiDjango,
  SiGraphql,
  SiKubernetes,
  SiTerraform,
  SiElasticsearch,
  SiFigma,
  SiZapier,
  SiRabbitmq,
  SiLangchain,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import {
  BrainCircuit,
  Bot,
  MessageCircle,
  Workflow,
  Globe,
  Cloud,
  Webhook,
  Network,
  Database,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type AnyIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string; color?: string }>;
type IconEntry = { Icon: AnyIcon; color: string };

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/\s|\.|-|_|\//g, "")
    .replace("apis", "api")
    .replace("js", "");

export const TECH_ICONS: Record<string, IconEntry> = {
  react: { Icon: SiReact as AnyIcon, color: "#61DAFB" },
  reactnative: { Icon: TbBrandReactNative as AnyIcon, color: "#61DAFB" },
  next: { Icon: SiNextdotjs as AnyIcon, color: "#FFFFFF" },
  tailwind: { Icon: SiTailwindcss as AnyIcon, color: "#38BDF8" },
  tailwindcss: { Icon: SiTailwindcss as AnyIcon, color: "#38BDF8" },
  node: { Icon: SiNodedotjs as AnyIcon, color: "#3C873A" },
  express: { Icon: SiExpress as AnyIcon, color: "#E5E7EB" },
  python: { Icon: SiPython as AnyIcon, color: "#3776AB" },
  aspnetcore: { Icon: SiDotnet as AnyIcon, color: "#512BD4" },
  dotnet: { Icon: SiDotnet as AnyIcon, color: "#512BD4" },
  django: { Icon: SiDjango as AnyIcon, color: "#0C4B33" },
  postgresql: { Icon: SiPostgresql as AnyIcon, color: "#4169E1" },
  postgres: { Icon: SiPostgresql as AnyIcon, color: "#4169E1" },
  mongodb: { Icon: SiMongodb as AnyIcon, color: "#47A248" },
  supabase: { Icon: SiSupabase as AnyIcon, color: "#3ECF8E" },
  firebase: { Icon: SiFirebase as AnyIcon, color: "#FFCA28" },
  openai: { Icon: SiOpenai as AnyIcon, color: "#10A37F" },
  openaiapi: { Icon: SiOpenai as AnyIcon, color: "#10A37F" },
  multiagenticragsystems: { Icon: BrainCircuit as AnyIcon, color: "#A78BFA" },
  ragsystems: { Icon: BrainCircuit as AnyIcon, color: "#A78BFA" },
  aiagents: { Icon: Bot as AnyIcon, color: "#22D3EE" },
  chatbots: { Icon: MessageCircle as AnyIcon, color: "#F472B6" },
  automationworkflows: { Icon: Workflow as AnyIcon, color: "#FBBF24" },
  docker: { Icon: SiDocker as AnyIcon, color: "#2496ED" },
  github: { Icon: SiGithub as AnyIcon, color: "#FFFFFF" },
  vercel: { Icon: SiVercel as AnyIcon, color: "#FFFFFF" },
  fastapi: { Icon: SiFastapi as AnyIcon, color: "#009688" },
  redis: { Icon: SiRedis as AnyIcon, color: "#DC382D" },
  websocket: { Icon: SiSocketdotio as AnyIcon, color: "#FFFFFF" },
  websockets: { Icon: SiSocketdotio as AnyIcon, color: "#FFFFFF" },
  socketio: { Icon: SiSocketdotio as AnyIcon, color: "#FFFFFF" },
  d3: { Icon: SiD3 as AnyIcon, color: "#F9A03C" },
  restapi: { Icon: Globe as AnyIcon, color: "#A78BFA" },
  restapis: { Icon: Globe as AnyIcon, color: "#A78BFA" },
  cloudinary: { Icon: SiCloudinary as AnyIcon, color: "#3448C5" },
  typescript: { Icon: SiTypescript as AnyIcon, color: "#3178C6" },
  javascript: { Icon: SiJavascript as AnyIcon, color: "#F7DF1E" },
  flutter: { Icon: SiFlutter as AnyIcon, color: "#02569B" },
  stripe: { Icon: SiStripe as AnyIcon, color: "#635BFF" },
  tensorflow: { Icon: SiTensorflow as AnyIcon, color: "#FF6F00" },
  gcp: { Icon: SiGooglecloud as AnyIcon, color: "#4285F4" },
  googlecloud: { Icon: SiGooglecloud as AnyIcon, color: "#4285F4" },
  aws: { Icon: Cloud as AnyIcon, color: "#FF9900" },
  amazonwebservices: { Icon: Cloud as AnyIcon, color: "#FF9900" },
  azure: { Icon: Cloud as AnyIcon, color: "#0078D4" },
  microsoftazure: { Icon: Cloud as AnyIcon, color: "#0078D4" },
  langchain: { Icon: SiLangchain as AnyIcon, color: "#1C3C3C" },
  rag: { Icon: BrainCircuit as AnyIcon, color: "#A78BFA" },
  vectordb: { Icon: Database as AnyIcon, color: "#A78BFA" },
  graphql: { Icon: SiGraphql as AnyIcon, color: "#E10098" },
  kubernetes: { Icon: SiKubernetes as AnyIcon, color: "#326CE5" },
  terraform: { Icon: SiTerraform as AnyIcon, color: "#7B42BC" },
  elasticsearch: { Icon: SiElasticsearch as AnyIcon, color: "#005571" },
  figma: { Icon: SiFigma as AnyIcon, color: "#F24E1E" },
  zapier: { Icon: SiZapier as AnyIcon, color: "#FF4F00" },
  n8n: { Icon: Workflow as AnyIcon, color: "#EA4B71" },
  rabbitmq: { Icon: SiRabbitmq as AnyIcon, color: "#FF6600" },
  webhook: { Icon: Webhook as AnyIcon, color: "#A78BFA" },
  webhooks: { Icon: Webhook as AnyIcon, color: "#A78BFA" },
  rest: { Icon: Globe as AnyIcon, color: "#A78BFA" },
  api: { Icon: TbApi as AnyIcon, color: "#A78BFA" },
  net: { Icon: SiDotnet as AnyIcon, color: "#512BD4" },
};

export const getTechIcon = (name: string): IconEntry | null => {
  const key = norm(name);
  if (TECH_ICONS[key]) return TECH_ICONS[key];
  for (const k of Object.keys(TECH_ICONS)) {
    if (key.startsWith(k) || k.startsWith(key)) return TECH_ICONS[k];
  }
  return null;
};

export const TechChip = ({ name, size }: { name: string; size?: number }) => {
  const entry = getTechIcon(name);
  return (
    <span title={name} className="tech-chip">
      {entry ? (
        <entry.Icon
          size={size ?? 20}
          style={{ color: entry.color, flexShrink: 0 } as React.CSSProperties}
        />
      ) : null}
      <span className="tech-chip-label">{name}</span>
    </span>
  );
};
