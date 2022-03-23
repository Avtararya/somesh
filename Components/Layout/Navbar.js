import React from 'react'

export default function Navbar() {
    return (
        <div>
            <div className="nav h-20 bg-footer-text pl-36 pt-7 text-lg">
                <ul className="flex space-x-28 ">
                    <li className=" cursor-pointer font-bold">Home </li>
                    <li className=" cursor-pointer font-bold">About</li>
                    <li className=" cursor-pointer font-bold">Contect Us</li>
                    <li className=" cursor-pointer font-bold">Design</li>
                    <li className=" cursor-pointer font-bold">Event</li>
                    <li className=" cursor-pointer font-bold">Vision</li>
                    <span className="absolute right-16 font-bold"><i class="fa-solid fa-magnifying-glass cursor-pointer"></i></span>

                </ul>
            </div>

        </div>
    )
}
