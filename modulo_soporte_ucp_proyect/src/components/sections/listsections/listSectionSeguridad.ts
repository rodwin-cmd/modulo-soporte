

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
    label: "Sección Confianza y Seguridad",
    qas: [
      {
        q: "Información sobre la Ley de Servicios Digitales: informes de transparencia",
        a: "UCP se ha propuesto mejorar la vida de las personas a través del aprendizaje, proporcionando un desarrollo de habilidades flexible y eficiente para capacitar tanto a particulares como a empresas de todo el mundo. Como parte de nuestro compromiso tanto con la educación como con la transparencia, proporcionamos la siguiente información tal y como exige la DSA",
      },
      {
        q: "El enfoque de UCP en cuanto a la alfabetización mediática",
        a: "En la era digital actual, el contenido en línea es una valiosa herramienta para aprender e innovar, por lo que resulta esencial saber manejar de manera responsable todo lo relacionado con este ámbito. Abordar el contenido nocivo en línea es una responsabilidad compartida que ayuda a crear un entorno centrado en la seguridad y la participación informada. En Udemy, creemos en el potencial de la tecnología para transformar vidas a través del aprendizaje, y estamos comprometidos a fomentar la alfabetización mediática y la concienciación sobre seguridad en línea para ayudar a nuestra comunidad a tomar decisiones informadas sobre su experiencia de aprendizaje.",
      },
    ],
  },
  {
    label: "Cómo denunciar el uso indebido",
    qas: [
      {
        q: "Todos los estudiantes y los instructores tienen la responsabilidad de conocer las condiciones de uso y las políticas sobre confianza y seguridad de Udemy, así como de actuar de acuerdo a ellas. Si quieres denunciar una posible infracción, puedes hacerlo a través de las opciones que encontrarás en el producto o poniéndote en contacto directamente con el equipo de Confianza y Seguridad.",
        a: "Si detectas algún problema con alguna imagen del curso o cualquier otra parte de la página de inicio del curso, desplázate hasta el final de la página, después de las reseñas del curso, y haz clic en el botón Denunciar uso indebido.",
      },
      {
        q: "Denunciar en una clase",
        a: "Para denunciar el uso indebido en una clase, haz clic en el icono de configuración de la parte inferior derecha del reproductor del curso. En el caso de infracciones que aparecen brevemente en una clase, incluye una marca de tiempo del problema en tu denuncia.",
      },
      {
        q: "Derechos Adicionales",
        a: "ontenga incitación a la violencia o el odio dirigidos contra un grupo de personas o un miembro de dicho grupo por motivos de sexo, raza, color, orígenes étnicos o sociales, características genéticas, idioma, religión o convicciones, opiniones políticas o de cualquier otro tipo, pertenencia a una minoría nacional, patrimonio, nacimiento, discapacidad, edad, orientación sexual o nacionalidad.",
      },
    ],
  },
  {
    label: "Presenta Apelaciones",
    qas: [
      {
        q: "Los usuarios de la Unión Europea tienen 6 meses para apelar una decisión de moderación inicial. Si quieres apelar una decisión tomada con respecto a denuncias que pertenecen a este tipo de problema, responde al correo electrónico en el que se ha comunicado la decisión o envía un correo electrónico",
        a: "Según la Ley de Servicios Digitales (DSA), todos los Estados miembro de la Unión Europea deben certificar a una serie de organismos independientes para la resolución de litigios de forma extrajudicial de los pleitos oportunos, incluidos aquellos casos en los que la visibilidad del contenido o el acceso a las cuentas se haya restringido debido a infracciones de la política o a la disposición de contenido ilegal, así como a aquellos casos en los que se haya denunciado contenido por infringir esta ley o las políticas aplicables y no se haya eliminado. ",
      },
    ],
  },

  {
    label:"Reglas de contenido y comportamiento para el estudiante",
    qas: [
      {
      q:"El estudiante es responsable de toda la actividad en la plataforma. Esto incluye el contenido que publica o crea en nuestra plataforma, como reseñas, preguntas, publicaciones, mensajes y cualquier otro contenido compartido",
      a:"Debes cumplir y no intentar eludir las Condiciones de uso y las Políticas de confianza y seguridad de Udemy, lo que incluye las obligaciones estipuladas en este artículo. Si accedes a nuestros Servicios como estudiante en la India, estos términos también incluirán las disposiciones de la cláusula de la Regla 3(2) de la normativa de tecnología de la información (directrices para intermediarios) de 2011.  ",
      }
    ],
  },
    {
    label:"¿Cómo puedo denunciar un curso que infringe mi marca registrada?",
    qas: [
      {
      q:"Albergamos miles de cursos en nuestra tienda virtual de aprendizaje en línea. Nuestro modelo de tienda virtual implica que no tenemos los derechos de autor del contenido de los cursos, sino que son los instructores quienes tienen estos derechos.",
      a:"Ocasionalmente los instructores pueden decidir anular la publicación de su curso y no admitir nuevas inscripciones. Por ejemplo, un instructor podría anular la publicación de un curso anticuado hasta que haya tenido la oportunidad de actualizar el contenido. Sin embargo, cuando un instructor anula la publicación de su curso, el contenido del curso permanece en la plataforma y sigue siendo accesible para los estudiantes que están inscritos en el curso",
      }
    ],
  },
      {
    label:"¿Cómo puedo informar que un curso Udemy infringe mis derechos de autor?",
    qas: [
      {
      q:"POLÍTICA DE DERECHOS DE AUTOR DE UCP PLATAFORMA",
      a:"Udemy se toma en serio las reclamaciones de infracción de derechos de autor. Responderemos a los avisos de supuesta infracción de derechos de autor que cumplan con la ley vigente. Si crees que algún material accesible desde www.udemy.com (elSitio web) infringe tus derechos de autor, puedes pedir la eliminación de dicho material (o el acceso a él) desde el Sitio web mediante el envío de una notificación por escrito a través",
      }
    ],
  },
  
]
