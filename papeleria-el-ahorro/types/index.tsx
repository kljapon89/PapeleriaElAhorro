import { Role, User } from "@prisma/client";

export type SafeUser = {
  firstname: string;
  lastname: string;
  createdAt: string;
  updateAt: string; // Asegúrate de que esté en minúscula
  emailVerified: string | null;
  image?: string | null;
  id: string;
  role: Role;
  email: string;
  hashedPassword?: string; // Si es opcional, utiliza `?`
  privacyAccepted: boolean;
};
