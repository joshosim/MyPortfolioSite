import React from 'react'
import UkaPhoto from "../images/uka.png";

const About = () => {
    return (
        <div className="bg-white py-[4rem] px-[1rem] md:px-[5rem]" id='about'>
            <h1 className="text-center font-extrabold text-4xl mb-[2rem]">
                About Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[4rem]">
                <div>
                    <div>
                        <p className="mb-[1rem]">
                            Java was the first line of code that ignited my passion for programming. From there, I dove into the world of mobile apps with Flutter and Dart, building interactive experiences that fit right in your pocket which gave me a clue about frontend development. But the desire to create didn't stop there. I ventured into the world of front-end development, wielding the power of HTML, CSS, and JavaScript to bring websites to life. Now, I'm honing my skills in React.js, crafting user interfaces that are both beautiful and functional. But the journey doesn't end here. The MERN stack beckons, promising the power of full-stack development. I'm eager to keep learning and growing, one line of code at a time.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src={UkaPhoto}
                        alt="//Uka"
                        className="h-[400px] w-[500px] object-cover rounded-xl"
                    />
                </div>
                <div>
                    <div>
                        <p className="font-bold">Biography</p>
                        <p className="mb-[1rem]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Obcaecati laborum ipsam doloribus doloremque natus modi sint
                            in accusantium minima fugiat, tenetur culpa.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold ">Contact</p>
                        <p className="mb-[1rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quidem, possimus natus quia nihil.
                        </p>
                    </div>
                    <div>
                        <div>
                            <p>01Yrs</p>
                            <p>Experience</p>
                        </div>
                        <div>
                            <p>03+</p>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
