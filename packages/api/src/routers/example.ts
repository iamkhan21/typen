import { createRouter } from '../createRouter';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const exampleRouter = createRouter().query('hello', {
	input: z
		.object({
			text: z.string().nullish()
		})
		.nullish(),
	resolve({ input }) {
		return {
			greeting: `Hello ${input?.text ?? 'world'}`
		};
	}
});