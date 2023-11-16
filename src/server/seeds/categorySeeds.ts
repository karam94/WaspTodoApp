import { User } from "@wasp/entities";
import { PrismaClient } from "@prisma/client";

type SanitizedUser = Omit<User, "password">;

export const categorySeeds = async (prismaClient: PrismaClient) => {
  const user = await createUser(prismaClient, {
    username: "DefaultUser",
    password: "Password123!",
  });

  const categoriesData = [{ name: "Category1" }, { name: "Category2" }];

  await prismaClient.category.createMany({
    data: categoriesData,
  });
};

async function createUser(
  prismaClient: PrismaClient,
  data: Pick<User, "username" | "password">
): Promise<SanitizedUser> {
  const { password, ...newUser } = await prismaClient.user.create({ data });
  return newUser;
}
