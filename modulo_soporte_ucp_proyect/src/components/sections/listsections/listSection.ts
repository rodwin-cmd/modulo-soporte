

export interface FAQ {
  q: string
  a: string
}

export interface FAQCategory {
  label: string
  qas: FAQ[]
}

export const faqsList: FAQCategory[] = [
  {
    label: "Reembolso",
    qas: [
      {
        q: "Estado del reembolso - Preguntas más frecuentes",
        a: "Las compras de los cursos aptos se pueden reembolsar en un plazo de 30 días tras la compra. A continuación se muestran las respuestas a algunas de las preguntas más comunes que recibimos relativas a reembolsos y el tiempo que tardan en procesarse.",
      },
      {
        q: "¿Cómo puedo enviar una solicitud de reembolso?",
        a: " A continuación, selecciona tu Método de reembolso. Aunque la transacción de reembolso sea válida para el método de pago original, puedes elegir recibir créditos de Udemy.Los reembolsos en créditos son más rápidos que los reembolsos mediante tu método de pago, ya que los créditos aparecen en tu cuenta de inmediato una vez que se ha procesado el reembolso. Obtén más información sobre los creditos de plataforma de cursos de UCP",
      },
    ],
  },
  {
    label: "Métodos de Pago",
    qas: [
      {
        q: "Plataforma UCP acepta distintos métodos de pago, en función del país y la ubicación de tu cuenta. En este artículo se enumeran los métodos de pago que admite Udemy y se explica cómo confirmar si puedes utilizar un método de pago concreto.",
        a: "Aceptamos las principales tarjetas de crédito y de débito internacionales como Visa, MasterCard, American Express, JCB y Discover. También aceptamos muchas tarjetas de crédito prepago.",
      },
      {
        q: "Créditos de UCP",
        a: "Si se han añadido créditos de Udemy a tu cuenta, se aplicarán automáticamente a tu siguiente compra de un curso en universidadcatolica.com",
      },
      {
        q: "PayPal",
        a: "PayPal es un método de pago admitido para los cursos de Udemy en la mayoría de los países.",
      },
    ],
  },
  {
    label: "Comprueba tus métodos de pago",
    qas: [
      {
        q: "En la página de pago se enumeran los métodos de pago disponibles para comprar cursos. Puedes acceder a esta página seleccionando Comprar ahora en cualquier curso. También puedes seleccionar Pagar en la",
        a: "Para obtener más información, consulta nuestros otros artículos del centro de ayuda relacionados con la adquisición de cursos:",
      },
    ],
  },

  {
    label:"Acceso de por vida",
    qas: [
      {
      q:"¿Seguiré teniendo acceso al curso incluso después de completarlo?",
      a:"Seguirás teniendo acceso al curso después de completarlo, siempre que tu cuenta esté al día á en buen pie y Udemy sigue teniendo una licencia para el curso. Por tanto, si quieres revisar contenido específico del curso después de terminarlo",
      }
    ],
  },
    {
    label:"¿Qué sucede si el instructor retira el curso de UCP?",
    qas: [
      {
      q:"lbergamos miles de cursos en nuestra tienda virtual de aprendizaje en línea. Nuestro modelo de tienda virtual implica que no tenemos los derechos de autor del contenido de los cursos, sino que son los instructores quienes tienen estos derechos.",
      a:"Ocasionalmente los instructores pueden decidir anular la publicación de su curso y no admitir nuevas inscripciones. Por ejemplo, un instructor podría anular la publicación de un curso anticuado hasta que haya tenido la oportunidad de actualizar el contenido. Sin embargo, cuando un instructor anula la publicación de su curso, el contenido del curso permanece en la plataforma y sigue siendo accesible para los estudiantes que están inscritos en el curso",
      }
    ],
  },
      {
    label:"Solución de problemas por errores de pago",
    qas: [
      {
      q:"Si recibes un mensaje de error en la página del proceso de compra de Udemy y no puedes finalizar la compra, en este artículo se explica cómo puedes resolver errores relacionados con el pago.",
      a:"Si ves un mensaje en el que se te pide que rellenes los campos necesarios o realices los pasos pertinentes, asegúrate de que has introducido los datos correctos y de que tu método de pago está actualizado mediante los pasos que se indican a continuación.",
      }
    ],
  },
  
]
