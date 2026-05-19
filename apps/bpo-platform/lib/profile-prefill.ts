import type { FormField, User } from "./types";

export function getProfileFieldPrefill(field: FormField, user: User) {
  const directMatches: Record<string, string | undefined> = {
    agentName: user.name,
    preparedBy: user.name,
    signatureName: user.name,
    licenseeName: user.name,
    agentTitle: user.title,
    agentPhone: user.phone,
    agentEmail: user.email,
    agentWebsite: user.website,
    licenseNumber: user.licenseNumber,
    brokerage: user.brokerageName,
    brokerageName: user.brokerageName,
    brokerageAddress: user.brokerageAddress,
    brokerageCity: user.brokerageCity,
    brokerageState: user.brokerageState,
    brokerageZip: user.brokerageZip,
    brokeragePhone: user.brokeragePhone
  };
  const direct = directMatches[field.id];
  if (direct) return direct;

  const label = field.label.toLowerCase();
  if (label.includes("agent") || label.includes("prepared by") || label.includes("signature name")) {
    if (label.includes("email")) return user.email;
    if (label.includes("phone")) return user.phone ?? "";
    if (label.includes("website") || label.includes("web")) return user.website ?? "";
    if (label.includes("title")) return user.title ?? "";
    if (label.includes("license")) return user.licenseNumber ?? "";
    if (label.includes("name") || label.includes("prepared by") || label.includes("signature name")) return user.name;
  }

  if (label.includes("brokerage") || label.includes("broker")) {
    if (label.includes("address")) return user.brokerageAddress ?? "";
    if (label.includes("city")) return user.brokerageCity ?? "";
    if (label.includes("state")) return user.brokerageState ?? "";
    if (label.includes("zip")) return user.brokerageZip ?? "";
    if (label.includes("phone")) return user.brokeragePhone ?? "";
    if (label.includes("name") || label === "brokerage" || label.includes("brokerage")) return user.brokerageName ?? "";
  }

  return "";
}
