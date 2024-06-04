type Role = "guest" | "customer" | "staff" | "manager" | "admin";

const rolesHierarchy: Map<Role, number> = new Map([
  ["guest", 0],
  ["customer", 1],
  ["staff", 2],
  ["manager", 3],
  ["admin", 4],
]);

export const isRoleOrHigher = (role: Role, userRole: string): boolean => {
  const roleRank = rolesHierarchy.get(role);
  const userRoleRank = rolesHierarchy.get(userRole as Role);

  if (roleRank === undefined || userRoleRank === undefined) {
    throw new Error("Invalid role");
  }

  return userRoleRank >= roleRank;
};
