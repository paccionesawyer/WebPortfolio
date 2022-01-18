import React, { useState } from 'react';
import Modal from 'react-modal';
import Index from '../../components/about/index';
import ModalContent from '../blog/modal/ModalContent';

const heroContent = {
	heroImage: 'img/hero/hero-img.jpg',
	heroMobileImage: 'hero-img-mobile',
	heroTitleName: 'Sawyer Bailey Paccione',
	heroDesignation: ['Mechanical Engineer'],
	heroDescriptions: `I am currently a Senior at Tufts University, 2022, studying Mechanical Engineering with an additional Major in Mathematics and a Minor in Computer Science.`,
	heroBtn: 'more about me',
};

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);

	function toggleModalOne() {
		setIsOpen(!isOpen);
	}
	function toggleModal2() {
		setIsOpen2(!isOpen2);
	}
	function toggleModal3() {
		setIsOpen3(!isOpen3);
	}
	function toggleModal4() {
		setIsOpen4(!isOpen4);
	}

	const blogData = [
		{
			id: 1,
			image: 'img/blog/seniorDesign/WholeArm.jpg',
			name: 'Senior Design',
			desc: '',
			open: isOpen2,
			toggle: toggleModal2,
			category: 'Robotics',
			author: 'Sawyer Paccione, Rónán Gissler, Olif Hordofa, Alex Eldaief, Dominic Ndondo',
			date: 'Fall 2021',
			tags: '',
			file: 'seniorDesign.md',
			video: 'https://www.youtube.com/embed/ZdUgWGHz1Jo',
			github: 'https://github.com/paccionesawyer/ROBOCROP?organization=paccionesawyer&organization=paccionesawyer',
			license: 'GNU GPLv3',
			googleSlides:
				'https://docs.google.com/presentation/d/e/2PACX-1vQsdTXiIu9xms6zou9ZVlmOmJg2EazT2DaKBfhyQ-ThOl3nSFAgFzbVSXFmxUtXajqufzORQ41UYV-6/embed?start=false&loop=false&delayms=3000',
		},
		{
			id: 3,
			image: 'img/blog/brachiobot/breakiobot.png',
			name: 'Brachiating Robot',
			desc: '',
			open: isOpen3,
			toggle: toggleModal3,
			category: 'Robotics',
			author: 'Sawyer Paccione',
			date: 'Fall 2021',
			tags: 'ME134, Robotics, Raspberry Pi, Brachiating, BioRobotics',
			file: 'brachiation.md',
			video: 'https://www.youtube.com/embed/mIbq5ids4QM',
			github: 'https://github.com/paccionesawyer/ME134-FinalProject',
			license: 'GNU GPLv3',
			googleSlides:
				'https://docs.google.com/presentation/d/e/2PACX-1vSjs8Mkjnvnsy14O_j1LQEZ1s4LpCua6nV3ZBgmLVWOHLzQyQpJAf6szwU_O0BjU34RtQWk0RT3hR0-/embed?start=true&loop=true&delayms=3000',
		},
		{
			id: 4,
			image: 'img/blog/hriStudy/HRIShortDemo.gif',
			name: 'HRI Study',
			desc: '',
			open: isOpen4,
			toggle: toggleModal4,
			category: 'Robotics',
			author: 'Sawyer Paccione, Olivia Tomassetti, Stephanie Bentley',
			date: 'Fall 2021',
			tags: 'HRI, Robotics, AI, Reinforcement Learning',
			file: 'hriStudy.md',
			video: 'https://www.youtube.com/embed/Vv3SntFA8zU',
			github: 'https://github.com/paccionesawyer/CS133-HRI-RobotDogStudy',
			license: 'GNU GPLv3',
			googleSlides:
				'https://docs.google.com/presentation/d/e/2PACX-1vQNPIvUquHoyIGUwaRVDOmOv_fwqTF68Nt0LLwS35dOxOJaGcU29s5cdVvJ_nBaaP56TutDN4VgNThF/embed?start=false&loop=false&delayms=3000',
		},
	];

	return (
		<>
			<div className='row home-details-container align-items-center'>
				<div
					className='col-lg-4 bg position-fixed d-none d-lg-block'
					style={{
						backgroundImage: `url(${
							process.env.PUBLIC_URL + heroContent.heroImage
						})`,
					}}
				></div>
				<div className='col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start'>
					<div>
						<img
							src={`img/hero/${heroContent.heroMobileImage}.jpg`}
							className='img-fluid main-img-mobile d-sm-block d-lg-none'
							alt='hero man'
						/>
						<h1 className='text-uppercase poppins-font'>
							I'm {heroContent.heroTitleName}.
							<span>{heroContent.heroDesignation}</span>
						</h1>
						<p className='open-sans-font'>
							{heroContent.heroDescriptions}
						</p>
						{/* <button className='button' onClick={toggleModalOne}>
							<span className='button-text'>
								{heroContent.heroBtn}
							</span>
							<span className='button-icon fa fa-arrow-right'></span>
						</button> */}
					</div>
					<div>
						<h2>Featured Projects</h2>
            <div className='row blog'>
            {blogData.map((blogData, index) => (
							<div
								key={index}
								className='col-12 col-md-6 col-lg-6 col-xl-4 mb-30'
							>
								<article
									className='post-container'
									onClick={blogData.toggle}
								>
                <div style={{'min-height': "0px"}}></div>
									<div className='post-thumb' >
										<div className='d-block position-relative overflow-hidden'>
											<img
												src={blogData.image}
												className='img-fluid'
												alt='Blog Post'
											/>
										</div>
									</div>
									<div className='post-content'>
										<div className='entry-header'>
											<h3>{blogData.name}</h3>
										</div>
										<div className='entry-content open-sans-font'>
											<p>{blogData.desc}</p>
										</div>
									</div>
								</article>
								<Modal
									isOpen={blogData.open}
									onRequestClose={blogData.toggle}
									contentLabel='My dialog'
									className='custom-modal dark'
									overlayClassName='custom-overlay dark'
									closeTimeoutMS={500}
								>
									<div>
										<button
											className='close-modal'
											onClick={blogData.toggle}
										>
											<img
												src='/img/cancel.svg'
												alt='close icon'
											/>
										</button>

										<div className='box_inner blog-post'>
											<ModalContent
												data={blogData}
											></ModalContent>
										</div>
									</div>
								</Modal>
							</div>
						))}
            </div>
					</div>
				</div>
			</div>
			{/* End home-details-container */}

			{/* Start Modal for About More */}
			<Modal
				isOpen={isOpen}
				onRequestClose={toggleModalOne}
				contentLabel='My dialog'
				className='custom-modal dark hero'
				overlayClassName='custom-overlay dark'
				closeTimeoutMS={500}
			>
				<div>
					<button className='close-modal' onClick={toggleModalOne}>
						<img src='/img/cancel.svg' alt='close icon' />
					</button>
					{/* End close icon */}

					<div className='box_inner about'>
						<div data-aos='fade-up' data-aos-duration='1200'>
							<div className='title-section text-left text-sm-center'>
								<h1>
									ABOUT <span>ME</span>
								</h1>
								<span className='title-bg'>Resume</span>
							</div>
							{/* End title */}
							<Index />
						</div>
					</div>
				</div>
				{/* End modal box news */}
			</Modal>
			{/* End  Modal for About More */}
		</>
	);
};

export default Hero;
