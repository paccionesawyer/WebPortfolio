import React, { useState, useEffect } from 'react';
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

	const blogData = [
		{
			id: 1,
			image: 'img/blog/stl_converter.svg',
			name: 'STL to CSV Converter',
			desc: 'Convert a 3D .stl into a .csv as a list of xyz points using a graphical user interface',
			open: isOpen,
			toggle: toggleModalOne,
			category: 'Computer Science',
			author: 'Sawyer',
			date: 'test',
			tags: 'test',
			file: 'stl-to-csv-converter.md',
		},
		{
			id: 2,
			image: 'img/blog/robotArm.png',
			name: '3 Axis Robot Arm',
			desc: 'ME134 - Homework 3 The Robotic Arm: Each group must build a robotic arm that writes your initials on something. This task should be completed autonomously.',
			open: isOpen2,
			toggle: toggleModalTwo,
			category: 'Robotics',
			author: 'Sawyer',
			date: 'test',
			tags: 'test',
			file: '3-axis-robot.md',
		},
		{
			id: 3,
			image: 'img/blog/PI_CAR_Labelled.jpg',
			name: 'web-pi-car',
			desc: 'In the figure below, what you see is a LEGO Spike Prime connected to two motors and a Raspberry Pi. The Raspberry PI hosts a server using the python library flask that has a custom Graphical User Interface used to control the car.',
			open: isOpen3,
			toggle: toggleModalThree,
			category: 'Robotics',
			author: 'Sawyer',
			date: 'test',
			tags: 'test',
			file: 'web-pi-car.md',
		},
	];
	const [filter, setFilter] = useState('All');
	function filterTags(val) {
		setFilter(val);
	}

	const file_name = 'stl-to-csv-converter.md';
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`./modal/MarkdownFiles/${file_name}`)
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setPost(res))
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	});

	return (
		<>
			<Nav filter={filter} setFilter={filterTags} />
			{blogData.map((blogData) =>
				filter === blogData.category || filter === 'All' ? (
					<div className='col-12 col-md-6 col-lg-6 col-xl-4 mb-30'>
						<article
							className='post-container'
							onClick={blogData.toggle}
						>
							<div className='post-thumb'>
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
				) : null
			)}
		</>
	);
};

export default Blog;
