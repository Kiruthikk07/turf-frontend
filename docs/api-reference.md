# TurfPro Backend API Reference

Base URL: `https://sportifo-cqg2b2bmg9e3hqck.southindia-01.azurewebsites.net`

> **Note:** APIs are under development. Do not call them from the frontend yet.

---

## Auth
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/request-otp` | Request OTP for mobile authentication |
| POST | `/api/auth/verify-otp` | Verify OTP and get tokens |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Logout / revoke refresh token |

## Users
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/users/complete-profile` | Complete user profile |
| GET | `/api/users/getuserbyid` | Get user by mobile number |

## Venues
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/venues` | Create a new venue (brand/org) |
| GET | `/api/venues` | Get all active venues |
| PUT | `/api/venues` | Update a venue |
| GET | `/api/venues/{venueId}` | Get venue by ID |

## Venue Locations
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/venue-locations` | Create venue location |
| PUT | `/api/venue-locations` | Update venue location |
| GET | `/api/venue-locations/venue/{venueId}` | Get locations by venue |
| GET | `/api/venue-locations/{venueLocationId}` | Get location by ID |

## Venue Location Users
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/venue-locations/{venueLocationId}/venue-location-users` | Get all users for a location |
| POST | `/api/venue-locations/{venueLocationId}/venue-location-users` | Assign user to location |
| GET | `/api/venue-locations/{venueLocationId}/venue-location-users/{userId}` | Get specific user |
| DELETE | `/api/venue-locations/{venueLocationId}/venue-location-users/{userId}` | Remove user from location |

## Turfs
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/turfs` | Create a new turf |
| GET | `/api/turfs` | Get all active turfs |
| PUT | `/api/turfs` | Update a turf |
| GET | `/api/turfs/{turfId}` | Get turf by ID |
| GET | `/api/turfs/list` | Get turf list with filters |

## Turf Sports
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/sports` | Get sports for a turf |
| POST | `/api/turfs/{turfId}/sports` | Add sports to a turf |
| PUT | `/api/turfs/{turfId}/sports` | Update turf sports |
| DELETE | `/api/turfs/{turfId}/sports` | Remove all sports |
| GET | `/api/turfs/{turfId}/sports/{turfSportId}` | Get specific sport |
| DELETE | `/api/turfs/{turfId}/sports/{turfSportId}` | Delete sport association |

## Turf Slot Rules
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/slot-rules` | Get all slot rules |
| POST | `/api/turfs/{turfId}/slot-rules` | Add slot rule (with optional price rules) |
| PUT | `/api/turfs/{turfId}/slot-rules` | Update slot rule |
| GET | `/api/turfs/{turfId}/slot-rules/{slotRuleId}` | Get specific slot rule |
| DELETE | `/api/turfs/{turfId}/slot-rules/{slotRuleId}` | Delete slot rule |

## Turf Special Slot Rules
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/special-slot-rules` | Get special slot rules |
| POST | `/api/turfs/{turfId}/special-slot-rules` | Add special slot rule |
| PUT | `/api/turfs/{turfId}/special-slot-rules` | Update special slot rule |
| GET | `/api/turfs/{turfId}/special-slot-rules/{specialPriceId}` | Get specific special rule |
| DELETE | `/api/turfs/{turfId}/special-slot-rules/{specialPriceId}` | Delete special rule |

## Turf Base Pricing
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/base-pricing` | Get base pricing |
| POST | `/api/turfs/{turfId}/base-pricing` | Add base pricing |
| PUT | `/api/turfs/{turfId}/base-pricing` | Update base pricing |

## Turf Holidays
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/holidays` | Get all holidays |
| POST | `/api/turfs/{turfId}/holidays` | Add a holiday |
| PUT | `/api/turfs/{turfId}/holidays` | Update a holiday |
| GET | `/api/turfs/{turfId}/holidays/{turfHolidayId}` | Get specific holiday |
| DELETE | `/api/turfs/{turfId}/holidays/{turfHolidayId}` | Delete a holiday |

## Turf Images
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/images` | Get all images |
| POST | `/api/turfs/{turfId}/images` | Upload images (multipart) |
| PUT | `/api/turfs/{turfId}/images` | Update image metadata |
| DELETE | `/api/turfs/{turfId}/images` | Remove all images |
| GET | `/api/turfs/{turfId}/images/{turfImageId}` | Get specific image |
| DELETE | `/api/turfs/{turfId}/images/{turfImageId}` | Delete specific image |

## Turf Users
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/turfs/{turfId}/turf-users` | Get all users for a turf |
| POST | `/api/turfs/{turfId}/turf-users` | Assign user to turf |
| GET | `/api/turfs/{turfId}/turf-users/{userId}` | Get specific turf user |
| DELETE | `/api/turfs/{turfId}/turf-users/{userId}` | Unassign user from turf |

## Slots
| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/slots/available` | Get available slots (query: turfId, startDate, endDate) |

## Bookings
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/bookings` | Create a booking |
| GET | `/api/bookings/{bookingId}` | Get booking by ID |
| DELETE | `/api/bookings/{bookingId}` | Cancel booking |
| POST | `/api/bookings/{bookingId}/cancel` | Cancel booking |
| GET | `/api/bookings/{userId}/history` | Get booking history (paginated) |

## Payments
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/payments/initiate` | Initiate payment for booking |
| GET | `/api/payments/{paymentId}` | Get payment by ID |
| GET | `/api/payments/booking/{bookingId}` | Get payment by booking ID |
| GET | `/api/payments/return` | Payment return URL handler |
| POST | `/api/payments/{paymentId}/refund` | Initiate refund |

## Reviews
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/reviews` | Create review |
| PUT | `/api/reviews` | Update review |
| GET | `/api/reviews` | Get reviews (filter by turf or user) |
| GET | `/api/reviews/{reviewId}` | Get review by ID |
| GET | `/api/reviews/turf/{turfId}/summary` | Get rating summary for turf |

## Sports
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/sports` | Create a sport |
| GET | `/api/sports` | Get all active sports |
