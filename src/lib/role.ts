type Role = 'guest' | 'customer' | 'staff' | 'manager' | 'admin';

const rolesHierarchy: Map<string, number> = new Map([
  ['guest', 0],
  ['customer', 1],
  ['staff', 2],
  ['manager', 3],
  ['admin', 4]
]);

export const isRoleOrHigher = (role: Role, userRole: string): boolean => {
  const roleRank = rolesHierarchy.get(role);
  const userRoleRank = rolesHierarchy.get(userRole);

  if (roleRank === undefined || userRoleRank === undefined) {
    throw new Error('Invalid role');
  }

  return userRoleRank >= roleRank;
};
