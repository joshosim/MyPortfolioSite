import { Menu, Transition } from '@headlessui/react'
import { HomeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import { Fragment } from 'react'
import { FcAbout } from 'react-icons/fc'
import { TbSocial } from 'react-icons/tb'
import { TiSpanner } from 'react-icons/ti'
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Example() {
    return (
        <div className="block">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-centertext-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='black' strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-[17rem] origin-top-right divide-y divide-gray-100 rounded-md bg-[#BBDEFA] shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <HomeIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <HomeIcon
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <AnchorLink href="#hero">
                                            Home
                                        </AnchorLink>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <FcAbout
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <FcAbout
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <AnchorLink href="#about">
                                            About
                                        </AnchorLink>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <TbSocial
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <TbSocial
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <AnchorLink href="#socials">
                                            Socials
                                        </AnchorLink>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <TiSpanner
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <TiSpanner
                                                className="mr-2 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <AnchorLink href="#projects">
                                            Projects
                                        </AnchorLink>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="tel:+2347066530998"> <button
                                        className={`${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {active ? (
                                            <PhoneIcon
                                                className="mr-2 h-5 w-5 text-violet-400"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <PhoneIcon
                                                className="mr-2 h-5 w-5 text-violet-400"
                                                aria-hidden="true"
                                            />
                                        )}
                                        Phone
                                    </button></a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div >
    )
}

