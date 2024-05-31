
import { validateRequest } from '@/actions/auth/validateRequest';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';


export default async function withAuthRequired({ children } : {children: ReactNode}) {
  const { user } = await validateRequest();
  if (!user) {
		redirect("/login");
	}

  return (
    <>
    {children}
    </>
  );
};
