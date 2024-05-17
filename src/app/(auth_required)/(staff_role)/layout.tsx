
import { validateRequest } from '@/auth/validateRequest';
import { isRoleOrHigher } from '@/lib/role';
import { redirect } from 'next/navigation';


export default async function withStaffRoleOrHigher() {
  // const { user } = await validateRequest();
  // Validate the user's role to be at least staff
  // isRoleOrHigher('staff', user.role)  ? 
  // isUserRoleOrHigher('staff'); redirect('/');
};
