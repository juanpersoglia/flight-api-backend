import { z } from "zod";

export const flightSchema = z.object({
  airline: z.object({
    code: z.string(),
    name: z.string(),
  }),

  flightNumber: z.string(),

  from: z.object({
    iata: z.string(),
    city: z.string(),
  }),

  to: z.object({
    iata: z.string(),
    city: z.string(),
  }),

  segments: z.array(
    z.object({
      dep: z.string(),
      arr: z.string(),
      durationMin: z.number(),
    })
  ),

  durationMin: z.number(),

  stops: z.number(),

  price: z.object({
    currency: z.string(),
    base: z.number(),
    taxes: z.number(),
    total: z.number(),
    fareClass: z.string(),
    fareRules: z.string(),
  }),

  availability: z.number(),

  attributes: z.object({
    baggage: z.string(),
    refundable: z.boolean(),
  }),
});
