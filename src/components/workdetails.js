/** @format */
import { useLayoutEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import SeeWork from './Workbtn';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../client';

const workdetails = ({ result }) => {
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const boxes = gsap.utils.toArray('.Work-info');
		boxes.forEach(box => {
			gsap.from(box, {
				scrollTrigger: box,
				y: 100,
				duration: 1.2,
				opacity: 0,
			});
		});
	}, []);
	return (
		<>
			{result.map(data => {
				return (
					<section className="work-wrapper" key={data._id}>
						<div>
							<h3>{data.projecttype}</h3>
							<h2 className="work-name">{data.title}</h2>
						</div>
						<div className="Work-info">
							<div className="work-image">
								<Image
									src={useNextSanityImage(client, data.image)}
									quality={100}
									layout="fill"
									objectFit="cover"
									alt={data.title}
								/>
							</div>
							<div className="work-details">
								<p className="work-about">{data.description}</p>
								<p className="work-stack">{data.technology.join(' ')}</p>
								<SeeWork url={data.workurl} />
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
};
export default workdetails;
