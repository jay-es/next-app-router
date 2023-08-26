'use server';

import { redirect } from 'next/navigation';

export const action = async (path: string) => {
  redirect(path);
};
