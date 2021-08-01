/** @format */

import React from 'react';
import Image from 'next/image';
import SeeWork from './Workbtn';
import WhatstheSauce from '../../public/wts.png';

const workdetails = () => {
	return (
		<>
			<div className="Work-info">
				<h3>Personal Project</h3>
				<span></span>
				<div className="work-image">
					<Image src={WhatstheSauce} layout="fill" objectFit="cover" />
				</div>
				<div className="work-details">
					<h2 className="work-name">WHATSTHESAUCE</h2>
					<p className="work-about">
						An anime search engine that fetches anime details based on image provided
					</p>
					<p className="work-stack">#Reactjs #Styledcomponents #graphql</p>
					<SeeWork />
				</div>
			</div>
		</>
	);
};
export default workdetails;
