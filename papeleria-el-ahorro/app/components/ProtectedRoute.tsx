import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Mientras se verifica la sesión
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Si no hay sesión, redirigir al usuario
  if (!session) {
    router.push('/login');
    return null;
  }

  // Si hay sesión, renderizar el contenido
  return <>{children}</>;
};

export default ProtectedRoute;
