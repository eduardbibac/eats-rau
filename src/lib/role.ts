type Role = 'guest' | 'student' | 'staff' | 'manager' | 'admin';

const rolesHierarchy: Map<Role, number> = new Map([
  ['guest', 0],
  ['student', 1],
  ['staff', 2],
  ['manager', 3],
  ['admin', 4]
]);

export const isRoleOrHigher = (role: Role, userRole: Role): boolean => {
  const roleRank = rolesHierarchy.get(role);
  const userRoleRank = rolesHierarchy.get(userRole);

  if (roleRank === undefined || userRoleRank === undefined) {
    throw new Error('Invalid role');
  }

  return userRoleRank >= roleRank;
};
