import { appRouter } from 'api/src/routers/_index';
import { createContext } from 'api/src/createContext';
import { createNextApiHandler } from '@trpc/server/adapters/next';

// export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext
});
