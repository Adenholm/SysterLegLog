import { prisma } from "../prisma";
import { t } from "../trpc";

export const appRouter = t.router({
  categories: t.procedure.query(async () => {
    return prisma.category.findMany();
  }),
  cards: t.procedure.query(async () => {
    return prisma.card.findMany();
  }),
});

export type AppRouter = typeof appRouter;
