import { faqsList } from "./sections/listsections/listSectionSeguridad"

export const Seguridad = () => {
  return (
    <>
    <section className='py-14'>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="max-w-lg">
                        <h3 className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                            Frequently asked questions
                        </h3>
                        <div className='mt-3 text-gray-600 dark:text-gray-400'>
                            <p>
                                Si no puedes encontrar la respuesta,contactanos{" "}
                                <a
                                    className='text-indigo-600 font-semibold whitespace-nowrap'
                                    href='support@floatui.com'>
                                    Contacto
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className='mt-12 divide-y sm:mt-20'>
                        {
                            faqsList.map((list, idx) => (
                                <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                                    <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:grow">
                                        <h4 className="text-gray-500 font-semibold">
                                            {list.label}
                                        </h4>
                                    </div>
                                    <ul className='flex-1 space-y-6 sm:last:pb-6 sm:space-y-8'>
                                        {list.qas.map((item, idx) => (
                                            <li
                                                key={idx}>
                                                <summary
                                                    className="flex items-center justify-between font-semibold text-gray-700">
                                                    {item.q}
                                                </summary>
                                                <p
                                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                                    className='mt-3 text-gray-600 leading-relaxed'>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    
    
    
    </>
  )
}
