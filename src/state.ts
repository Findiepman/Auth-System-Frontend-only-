import { User, Session } from './types';

export const state = {
  users: [] as User[],
  session: null as Session | null
};