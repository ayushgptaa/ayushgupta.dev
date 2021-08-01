/** @format */

import React from 'react';
import Image from 'next/image';
import WhatstheSauce from '../../public/wts.png';

const workdetails = () => {
	return (
		<>
			<div className="Work-info">
				<div className="work-image">
					<Image src={WhatstheSauce} layout="fill" objectFit="cover" />
				</div>
				<div className="work-details">
					<h2 className="work-name">WHATSTHESAUCE</h2>
					<p className="work-about">
						An anime search engine that fetches anime details based on image provided
					</p>
					<p className="work-stack">#Reactjs #Styledcomponents #graphql</p>
					<a href="/about">see work</a>
				</div>
				details
			</div>
		</>
	);
};
export default workdetails;
