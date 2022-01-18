import React, { useState } from 'react';
import Modal from 'react-modal';

import Nav from './BlogNav';
import ModalContent from './modal/ModalContent';

Modal.setAppElement('#root');

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
    const [isOpen10, setIsOpen10] = useState(false);
    const [isOpen11, setIsOpen11] = useState(false);
    // const [isOpen12, setIsOpen12] = useState(false);
    // const [isOpen13, setIsOpen13] = useState(false);
    // const [isOpen14, setIsOpen14] = useState(false);
    // const [isOpen15, setIsOpen15] = useState(false);
    // const [isOpen16, setIsOpen16] = useState(false);
    // const [isOpen17, setIsOpen17] = useState(false);
    // const [isOpen18, setIsOpen18] = useState(false);
    // const [isOpen19, setIsOpen19] = useState(false);
    // const [isOpen20, setIsOpen20] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    function toggleModalTwo() {
        setIsOpen2(!isOpen2);
    }
    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
        setIsOpen4(!isOpen4);
    }
    function toggleModalFive() {
        setIsOpen5(!isOpen5);
    }
    function toggleModalSix() {
        setIsOpen6(!isOpen6);
    }
    function toggleModalSeven() {
    	setIsOpen7(!isOpen7);
    }
    function toggleModalEight() {
    	setIsOpen8(!isOpen8);
    }
    function toggleModalNine() {
    	setIsOpen9(!isOpen9);
    }
    function toggleModal10() {
    	setIsOpen10(!isOpen10);
    }
    function toggleModal11() {
    	setIsOpen11(!isOpen11);
    }
    // function toggleModal12() {
    // 	setIsOpen12(!isOpen12);
    // }
    // function toggleModal13() {
    // 	setIsOpen13(!isOpen13);
    // }
    // function toggleModal14() {
    // 	setIsOpen14(!isOpen14);
    // }
    // function toggleModal15() {
    // 	setIsOpen15(!isOpen15);
    // }
    // function toggleModal16() {
    // 	setIsOpen16(!isOpen16);
    // }
    // function toggleModal17() {
    // 	setIsOpen17(!isOpen17);
    // }
    // function toggleModal18() {
    // 	setIsOpen18(!isOpen18);
    // }
    // function toggleModal19() {
    // 	setIsOpen19(!isOpen19);
    // }
    // function toggleModal20() {
    // 	setIsOpen20(!isOpen20);
    // }

    const blogData = [
        {
            id: 8,
            image: 'img/blog/seniorDesign/WholeArm.jpg',
            name: 'Senior Design - Seedling Incubator',
            desc: 'An automatic robotic system that can plant and monitor seeds.',
            open: isOpen8,
            toggle: toggleModalEight,
            category: 'Robotics',
            author: 'Sawyer Paccione, Rónán Gissler, Olif Hordofa, Alex Eldaief, Dominic Ndondo',
            date: 'Fall 2021',
            tags: '',
            file: 'seniorDesign.md',
            video: 'https://www.youtube.com/embed/ZdUgWGHz1Jo',
            github: 'https://github.com/paccionesawyer/ROBOCROP?organization=paccionesawyer&organization=paccionesawyer',
            license: 'GNU GPLv3',
            googleSlides: "https://docs.google.com/presentation/d/e/2PACX-1vQsdTXiIu9xms6zou9ZVlmOmJg2EazT2DaKBfhyQ-ThOl3nSFAgFzbVSXFmxUtXajqufzORQ41UYV-6/embed?start=false&loop=false&delayms=3000"
        },
        {
            id: 7,
            image: 'img/blog/brachiobot/breakiobot.png',
            name: 'Brachiating Robot',
            desc: 'Each group will develop and build a brachiating robot to overcome the brachiation course.',
            open: isOpen7,
            toggle: toggleModalSeven,
            category: 'Robotics',
            author: 'Sawyer Paccione',
            date: 'Fall 2021',
            tags: 'ME134, Robotics, Raspberry Pi, Brachiating, BioRobotics',
            file: 'brachiation.md',
            video: 'https://www.youtube.com/embed/mIbq5ids4QM',
            github: 'https://github.com/paccionesawyer/ME134-FinalProject',
            license: 'GNU GPLv3',
            googleSlides: "https://docs.google.com/presentation/d/e/2PACX-1vSjs8Mkjnvnsy14O_j1LQEZ1s4LpCua6nV3ZBgmLVWOHLzQyQpJAf6szwU_O0BjU34RtQWk0RT3hR0-/embed?start=true&loop=true&delayms=3000"
        },
        {
            id: 11,
            image: 'img/blog/hriStudy/HRIShortDemo.gif',
            name: 'Teaching a Robot Dog New Tricks',
            desc: 'A Human Robot Interaction study on how training a robot can influence interaction.',
            open: isOpen11,
            toggle: toggleModal11,
            category: 'Robotics',
            author: 'Sawyer Paccione, Olivia Tomassetti, Stephanie Bentley',
            date: 'Fall 2021',
            tags: 'HRI, Robotics, AI, Reinforcement Learning',
            file: 'hriStudy.md',
            video: 'https://www.youtube.com/embed/Vv3SntFA8zU',
            github: 'https://github.com/paccionesawyer/CS133-HRI-RobotDogStudy',
            license: 'GNU GPLv3',
            googleSlides: 'https://docs.google.com/presentation/d/e/2PACX-1vQNPIvUquHoyIGUwaRVDOmOv_fwqTF68Nt0LLwS35dOxOJaGcU29s5cdVvJ_nBaaP56TutDN4VgNThF/embed?start=false&loop=false&delayms=3000'
        },
        {
            id: 2,
            image: 'img/blog/drawingArm/robotArm.png',
            name: 'Drawing Robot Arm',
            desc: 'Each group must build a robotic arm that writes your initials on something.',
            open: isOpen2,
            toggle: toggleModalTwo,
            category: 'Robotics',
            author: 'Sawyer Paccione, Rebecca Shen, Matt Toven',
            date: 'Fall 2021',
            tags: 'Robotics, ME134, Denavit-Hartenberg, 3D Printing, LaserCut, Raspberry Pi',
            file: '3-axis-robot.md',
            video: 'https://www.youtube.com/embed/DEUlKgTPG_8',
            github: 'https://github.com/paccionesawyer/3Axis-DrawingRobot',
            license: 'GNU GPLv3',
            googleSlides:
                'https://docs.google.com/presentation/d/e/2PACX-1vSffffp1ur_SL_2saIzBnyVTFeWSw4RRE7s29ElabWWkOJwfb-GiONN20kFewzAP_Ru_HWtoF3kxdRx/embed?start=true&loop=true&delayms=3000',
        },
        {
            id: 3,
            image: 'img/blog/webCar/PI_CAR_Labelled.jpg',
            name: 'Web Controlled Car',
            desc: 'A car built to run via a user-interface built into a web server',
            open: isOpen3,
            toggle: toggleModalThree,
            category: 'Robotics',
            author: 'Sawyer Paccione',
            date: 'Spring 2021',
            tags: 'Robotics, ME35, HTTP, Raspberry Pi',
            file: 'web-pi-car.md',
            video: 'https://www.youtube.com/embed/HMzt1AFN9BQ',
            github: 'https://github.com/paccionesawyer/web-pi-car',
            license: 'GNU GPLv3',
            googleSlides: null,
        },
        {
            id: 4,
            image: 'img/blog/barrelClock/barrelClockCover43.png',
            name: 'Barrel Clock',
            desc: 'Each group must build an analog clock that tells the time. Our CAD design is three “Barrels” one for hours, one for minutes and another for seconds.',
            open: isOpen4,
            toggle: toggleModalFour,
            category: 'Robotics',
            author: 'Sawyer Paccione, James Staley, Ilan Felberg',
            date: 'Fall 2021',
            tags: 'ME134, Robotics, Raspberry Pi, Servo Motor, 3D Printing, Lasercut',
            file: 'barrelClock.md',
            video: 'https://www.youtube.com/embed/XxoPbqSJhxU',
            github: 'https://github.com/paccionesawyer/Analog-Clock',
            license: 'GNU GPLv3',
            googleSlides:
                'https://docs.google.com/presentation/d/e/2PACX-1vSZQkpaKKM4a7oE4soe3qsaG70uYuO7I1KXHlyM0mWFdxtdphlEvD4jj85krfrH5BP44N42HmhmU8X7/embed?start=true&loop=true&delayms=3000',
        },
        {
            id: 1,
            image: 'img/blog/stlConverter/stl_converter.svg',
            name: 'STL to CSV Converter',
            desc: 'Convert a 3D .stl into a .csv as a list of xyz points using a graphical user interface',
            open: isOpen,
            toggle: toggleModalOne,
            category: 'Computer Science',
            author: 'Sawyer Paccione',
            date: 'Summer 2021',
            tags: 'STL, CSV, Computer Science',
            file: 'stl-to-csv-converter.md',
            video: 'https://www.youtube.com/embed/O8TiVJCqcdQ',
            github: 'https://github.com/paccionesawyer/stl-to-csv-converter',
            license: 'GNU GPLv3',
            googleSlides: null,
        },
        {
            id: 5,
            image: 'img/blog/balancingRobot/balancingRobot.png',
            name: 'Balancing Robot',
            desc: 'Each group must build a robot that actively balances using an IMU and Lidar.',
            open: isOpen5,
            toggle: toggleModalFive,
            category: 'Robotics',
            author: 'Sawyer Paccione, Rónán Gissler, Akshita Rao',
            date: 'Fall 2021',
            tags: 'ME134, Robotics, Raspberry Pi, Servo Motor, 3D Printing, Lasercut',
            file: '',
            video: 'https://www.youtube.com/embed/o_CTzC9hGLA',
            github: 'https://github.com/paccionesawyer/Balancing-Robot',
            license: 'GNU GPLv3',
            googleSlides:
                'https://docs.google.com/presentation/d/e/2PACX-1vRHjJN3GT4tmBuBeMUIx4y-onYyvO6Yz6UtI8IFlalm_2amTn-IVO_JNePIYrSuACxNmAw4vjM9W5vp/embed?start=false&loop=false&delayms=3000',
        },
        {
            id: 6,
            image: 'img/blog/catapultTennis/tennisHRI.jpg',
            name: 'Tennis Catapult HRI',
            desc: 'Each group must build a robotic system that can both receive and pass a tennis ball to at least two humans spaced at least 90 degrees apart from the center of the robot.',
            open: isOpen6,
            toggle: toggleModalSix,
            category: 'Robotics',
            author: 'Sawyer Paccione, Taylor Korte, Jack Amsbry',
            date: 'Fall 2021',
            tags: 'ME134, Robotics, Raspberry Pi, Servo Motor, Facial Recognition, Haar Cascade, HRI',
            file: '*.md',
            video: 'https://www.youtube.com/embed/hkErcos6EiM',
            github: 'https://github.com/paccionesawyer/Catapult-Robot',
            license: 'GNU GPLv3',
            googleSlides:
                'https://docs.google.com/presentation/d/e/2PACX-1vQsvUF0MH1QBB1-WiG6-YcRISoWYFb105B0-GZHX-XnUdSZJmjdi32foXiJrqc8iVNaJc89_BuZAp_h/embed?start=true&loop=true&delayms=3000',
        },
        {
            id: 10,
            image: 'img/blog/sudoku/sudokuDemo43.gif',
            name: 'Sudoku Solver',
            desc: 'Automatically solve any sudoku puzzle by setting it up as a Constraint Satisfaction Problem',
            open: isOpen10,
            toggle: toggleModal10,
            category: 'Computer Science',
            author: 'Sawyer Paccione',
            date: 'Summer 2020',
            tags: 'Computer Science, CSP, Python',
            file: 'sudoku.md',
            video: 'https://www.youtube.com/embed/QRx60GoxlpM',
            github: 'https://github.com/paccionesawyer/sudokuSolver-CSP',
            license: 'GNU GPLv3',
            googleSlides: null
        },
        {
            id: 9,
            image: 'img/blog/roomba/behaviorTree.png',
            name: 'Roomba Behavior Tree',
            desc: 'An implementation of a Roomba\'s behavior tree',
            open: isOpen9,
            toggle: toggleModalNine,
            category: 'Computer Science',
            author: 'Sawyer Paccione',
            date: 'Summer 2020',
            tags: 'Computer Science, Behavior Tree, Python',
            file: 'roomba.md',
            video: null,
            github: 'https://github.com/paccionesawyer/roombaBehaviorTree',
            license: 'GNU GPLv3',
            googleSlides: null
        },
        // {
        //     id: X,
        //     image: 'img/blog/',
        //     name: '',
        //     desc: '',
        //     open: isOpenX,
        //     toggle: toggleModalX,
        //     category: 'Robotics',
        //     author: 'Sawyer Paccione',
        //     date: '',
        //     tags: '',
        //     file: '*.md',
        //     video: '',
        //     github: '',
        //     license: '',
        //     googleSlides: ""
        // },
    ];
    const [filter, setFilter] = useState('All');
    function filterTags(val) {
        setFilter(val);
    }

    return (
        <>
            <Nav filter={filter} setFilter={filterTags} />
            {blogData.map((blogData, index) =>
                filter === blogData.category || filter === 'All' ? (
                    <div
                        key={index}
                        className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
                    >
                        <article
                            className="post-container"
                            onClick={blogData.toggle}
                        >
                            <div className="post-thumb">
                                <div className="d-block position-relative overflow-hidden">
                                    <img
                                        src={blogData.image}
                                        className="img-fluid"
                                        alt="Blog Post"
                                    />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-header">
                                    <h3>{blogData.name}</h3>
                                </div>
                                <div className="entry-content open-sans-font">
                                    <p>{blogData.desc}</p>
                                </div>
                            </div>
                        </article>
                        <Modal
                            isOpen={blogData.open}
                            onRequestClose={blogData.toggle}
                            contentLabel="My dialog"
                            className="custom-modal dark"
                            overlayClassName="custom-overlay dark"
                            closeTimeoutMS={500}
                        >
                            <div>
                                <button
                                    className="close-modal"
                                    onClick={blogData.toggle}
                                >
                                    <img
                                        src="/img/cancel.svg"
                                        alt="close icon"
                                    />
                                </button>

                                <div className="box_inner blog-post">
                                    <ModalContent
                                        data={blogData}
                                    ></ModalContent>
                                </div>
                            </div>
                        </Modal>
                    </div>
                ) : null
            )}
        </>
    );
};

export default Blog;
