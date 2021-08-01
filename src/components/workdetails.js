/** @format */

import React from 'react';
import Image from 'next/image';
import SeeWork from './Workbtn';
import WhatstheSauce from '../../public/wts.png';

const workdetails = () => {
	return (
		<>
			<div className="work-title">
				<h3>Personal Project</h3>
				<span></span>
			</div>
			<div className="Work-info">
				<div className="work-image">
					<Image src={WhatstheSauce} layout="fill" objectFit="cover" quality={100} />
				</div>
				<div className="work-details">
					<h2 className="work-name">WHATSTHESAUCE</h2>
					<p className="work-about">
						An anime search engine that fetches anime info based on image provided. It tells you which
						anime, which episode, and the exact moment this scene appears.
					</p>
					<p className="work-stack">#Reactjs #Styledcomponents #graphql</p>
					<SeeWork />
				</div>
			</div>
		</>
	);
};
export default workdetails;
