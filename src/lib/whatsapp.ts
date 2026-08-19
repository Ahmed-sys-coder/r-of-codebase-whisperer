// Centralized WhatsApp contact details. Single source of truth.
export const WHATSAPP_NUMBER = "923362704833";
export const WHATSAPP_MESSAGE =
  "Hi Code Envision Technologies, I want to discuss a project.";
export const WHATSAPP_ARIA = "Chat with us on WhatsApp";

export function getWhatsAppUrl(message?: string): string {
  const text = message && message.trim().length > 0 ? message : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getServiceWhatsAppUrl(serviceName?: string): string {
  if (!serviceName) return getWhatsAppUrl();
  return getWhatsAppUrl(
    `Hi Code Envision Technologies, I want to discuss ${serviceName} services.`,
  );
}

// Backwards-compatible default URL used by existing imports.
export const WHATSAPP_URL = getWhatsAppUrl();
