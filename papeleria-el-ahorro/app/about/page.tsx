import React from 'react';
import Container from '../components/Container';
import Image from 'next/image';

type Props = {};


function AboutPage({}: Props) {
  return (
    <Container>
      <h1 className='text-left text-2xl font-serif text-slate-800 mt-8 mb-8 '>
        Acerca de Papelería El Ahorro
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>HISTORIA</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
               Papelería El Ahorro es una tienda ubicada en El Carmen, Manabí, dedicada a la venta de artículos de papelería, 
               libros y materiales escolares. Desde su creación, nos hemos destacado por ofrecer productos de calidad a precios
               accesibles, con un enfoque en la atención personalizada y la satisfacción del cliente. Nuestro compromiso es ser 
               un referente local en el suministro de materiales educativos y de oficina, adaptándonos a las necesidades del mercado
               con innovación y un servicio al cliente excepcional. Ahora, con nuestra expansión al comercio electrónico, buscamos 
               acercar nuestros productos a una mayor audiencia, facilitando la compra desde cualquier lugar y en cualquier momento.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/empresa.png"
            alt="Empresa"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>MISIÓN</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>

           En Papelería El Ahorro, nos comprometemos a ofrecer productos de alta calidad que superen las expectativas 
           de nuestros clientes, garantizando durabilidad y satisfacción en cada compra. Lo logramos mediante una cuidadosa
           selección de proveedores, asegurando que cada producto cumpla con nuestros estándares. ¡Tú confianza es nuestra 
           prioridad!
           
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/frase.png"
            alt="Misión"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

  
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>VISIÓN</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
            Consolidarnos como una papelería líder en el mercado, destacándonos por nuestra constante búsqueda de nuevas 
            tendencias y productos. Nos esforzaremos por ofrecer atención personalizada, productos innovadores a precios 
            competitivos. Nuestro compromiso es una excelente calidad de servicio al cliente, generando confianza y satisfacción 
            total hacia el cliente.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300">
          <Image
            src="/escaleras.png"
            alt="Visión"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>

        <div className="bg-gray-200 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300 mb-8">
          <p className="mb-4 mx-8 text-justify font-medium">
            <strong>NUESTROS CLIENTES</strong>
          </p>
          <p className='mb-4 mx-8 text-justify font-medium'>
           Nuestros clientes son nuestra inspiración y nuestra motivación. Continuaremos adaptándonos y 
           evolucionando para satisfacer sus necesidades en un mundo en constante cambio. Su satisfacción
           y fidelidad son nuestra mayor recompensa, y esperamos seguir siendo parte de sus vidas durante
            muchos años más.
          </p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col justify-center items-center relative hover:shadow-xl transition duration-300 mb-8">
          <Image
            src="/clientes.jpg"
            alt="Clientes"
            width={600}
            height={90}
            className="mx-auto"
          />
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;
