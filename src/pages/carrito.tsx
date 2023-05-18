import CamComponents from '@/components/CamComponents'
import CartHeader from '@/components/CartHeader'
import NumberCounter from '@/components/NumberCounter'
import SearchBar from '@/components/SearchBar'
import TopbarPromo from '@/components/TopbarPromo'
import { Box } from '@chakra-ui/react'
import React from 'react'

function carrito() {
  return (
    <>
        <TopbarPromo  titulo={"Carrito"} />
        <CamComponents  />
        <Box paddingTop={"62px"}>
        <div className="flex  flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 sm:w-32 sm:h-32" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                                    <p className="text-sm ">Classic</p>
                                </div>
                                <div className="text-right">
                                    <NumberCounter />
                                    <p className="text-lg font-semibold">$59.99</p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                        <rect width="32" height="200" x="168" y="216"></rect>
                                        <rect width="32" height="200" x="240" y="216"></rect>
                                        <rect width="32" height="200" x="312" y="216"></rect>
                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                    </svg>
                                    <span>Eliminar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80" alt="Replica headphones" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">Replica headphones</h3>
                                    <p className="text-sm dark:text-gray-400">White</p>
                                </div>
                                <div className="text-right">
                                    <NumberCounter />
                                    <p className="text-lg font-semibold">$99.95</p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                                <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                        <rect width="32" height="200" x="168" y="216"></rect>
                                        <rect width="32" height="200" x="240" y="216"></rect>
                                        <rect width="32" height="200" x="312" y="216"></rect>
                                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                    </svg>
                                    <span>Eliminar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="space-y-1 text-right">
                <p>Total de compra:
                    <span className="font-semibold">$357</span>
                </p>
            </div>
            <div className="flex justify-end space-x-4">
                <button type="button" className="px-6 py-2 border rounded-md bg-naranja text-white text-sm md:text-base hover:bg-green-800">Ver más promociones
                </button>
                <button type="button" className="px-6 py-2 border rounded-md  bg-secondary text-white text-sm md:text-base hover:bg-green-800">
                    Guardar
                </button>
                
            </div>
        </div>
        </Box>
    </>
  )
}

export default carrito