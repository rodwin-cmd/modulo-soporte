
'use client'



export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LOGO Y DESCRIPCIÓN */}
          <div>
            <a href="#" className="flex items-center space-x-2">
              <img
                src="public/assets/ucp_negro.png"
                alt="Logo"
                className="h-12 w-auto"
              />
              <span className="text-lg font-semibold text-red-800">Soporte</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 leading-6">
              Tu canal directo para resolver dudas, reportar incidencias y recibir ayuda personalizada.
            </p>
          </div>

          {/* ENLACES */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Enlaces útiles
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Seguridad</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Ticket de soporte</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600">Contáctanos</a></li>
            </ul>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600" aria-label="Facebook">
                {/* <Facebook className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600" aria-label="Instagram">
                {/* <Instagram className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600" aria-label="Twitter">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600" aria-label="GitHub">
                {/* <Github className="w-5 h-5" /> */}
              </a>
            </div>
          </div>
        </div>

        {/* LÍNEA DIVISORIA */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Universidad Católica de Pereira — Módulo de Soporte. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
