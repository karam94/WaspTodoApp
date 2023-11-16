import { User } from "@wasp/entities";

export const useUser = (user: User) => {
  return {
    id: user.id,
    formattedUsername:
      user.username.charAt(0).toUpperCase() + user.username.slice(1),
  };
};
