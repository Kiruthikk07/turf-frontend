/**
 * API client for TurfPro backend.
 * Base URL: https://sportifo-cqg2b2bmg9e3hqck.southindia-01.azurewebsites.net
 *
 * NOTE: APIs are not yet active. This file documents the contract only.
 * Wire up the fetch calls once the backend is ready.
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json();
}

// ── Auth ────────────────────────────────────────────────
export const authApi = {
  requestOtp: (mobile: string) => request("/api/auth/request-otp", { method: "POST", body: JSON.stringify({ mobile }) }),
  verifyOtp: (mobile: string, otp: string) => request("/api/auth/verify-otp", { method: "POST", body: JSON.stringify({ mobile, otp }) }),
  refresh: (refreshToken: string) => request("/api/auth/refresh", { method: "POST", body: JSON.stringify({ refreshToken }) }),
  logout: () => request("/api/auth/logout", { method: "POST" }),
};

// ── Venues ──────────────────────────────────────────────
export const venuesApi = {
  list: () => request("/api/venues"),
  get: (id: string) => request(`/api/venues/${id}`),
  create: (body: unknown) => request("/api/venues", { method: "POST", body: JSON.stringify(body) }),
  update: (body: unknown) => request("/api/venues", { method: "PUT", body: JSON.stringify(body) }),
};

// ── Venue Locations ─────────────────────────────────────
export const venueLocationsApi = {
  byVenue: (venueId: string) => request(`/api/venue-locations/venue/${venueId}`),
  get: (id: string) => request(`/api/venue-locations/${id}`),
  create: (body: unknown) => request("/api/venue-locations", { method: "POST", body: JSON.stringify(body) }),
  update: (body: unknown) => request("/api/venue-locations", { method: "PUT", body: JSON.stringify(body) }),
};

// ── Turfs ───────────────────────────────────────────────
export const turfsApi = {
  list: () => request("/api/turfs"),
  get: (id: string) => request(`/api/turfs/${id}`),
  create: (body: unknown) => request("/api/turfs", { method: "POST", body: JSON.stringify(body) }),
  update: (body: unknown) => request("/api/turfs", { method: "PUT", body: JSON.stringify(body) }),
  sports: (turfId: string) => request(`/api/turfs/${turfId}/sports`),
  slotRules: (turfId: string) => request(`/api/turfs/${turfId}/slot-rules`),
  specialSlotRules: (turfId: string) => request(`/api/turfs/${turfId}/special-slot-rules`),
  basePricing: (turfId: string) => request(`/api/turfs/${turfId}/base-pricing`),
  holidays: (turfId: string) => request(`/api/turfs/${turfId}/holidays`),
  images: (turfId: string) => request(`/api/turfs/${turfId}/images`),
};

// ── Slots ───────────────────────────────────────────────
export const slotsApi = {
  available: (turfId: string, startDate: string, endDate: string) =>
    request(`/api/slots/available?turfId=${turfId}&startDate=${startDate}&endDate=${endDate}`),
};

// ── Bookings ────────────────────────────────────────────
export const bookingsApi = {
  get: (id: string) => request(`/api/bookings/${id}`),
  history: (userId: string, page = 1) => request(`/api/bookings/${userId}/history?page=${page}`),
  create: (body: unknown) => request("/api/bookings", { method: "POST", body: JSON.stringify(body) }),
  cancel: (id: string) => request(`/api/bookings/${id}/cancel`, { method: "POST" }),
};

// ── Payments ────────────────────────────────────────────
export const paymentsApi = {
  get: (id: string) => request(`/api/payments/${id}`),
  byBooking: (bookingId: string) => request(`/api/payments/booking/${bookingId}`),
  initiate: (body: unknown) => request("/api/payments/initiate", { method: "POST", body: JSON.stringify(body) }),
  refund: (id: string, body: unknown) => request(`/api/payments/${id}/refund`, { method: "POST", body: JSON.stringify(body) }),
};

// ── Reviews ─────────────────────────────────────────────
export const reviewsApi = {
  list: (turfId?: string) => request(`/api/reviews${turfId ? `?turfId=${turfId}` : ""}`),
  get: (id: string) => request(`/api/reviews/${id}`),
  summary: (turfId: string) => request(`/api/reviews/turf/${turfId}/summary`),
  create: (body: unknown) => request("/api/reviews", { method: "POST", body: JSON.stringify(body) }),
  update: (body: unknown) => request("/api/reviews", { method: "PUT", body: JSON.stringify(body) }),
};

// ── Sports ──────────────────────────────────────────────
export const sportsApi = {
  list: () => request("/api/sports"),
  create: (body: unknown) => request("/api/sports", { method: "POST", body: JSON.stringify(body) }),
};
