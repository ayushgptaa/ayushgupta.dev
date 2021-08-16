/** @format */

import React from 'react';
import Image from 'next/image';
import SeeWork from './Workbtn';
// import WhatstheSauce from '../../public/wts.png';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../client';

const workdetails = ({ result }) => {
	console.log(result);
	return (
		<div>
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
									layout="fill"
									objectFit="cover"
									quality={100}
									preload="true"
								/>
							</div>
							<div className="work-details">
								<p className="work-about">{data.description}</p>
								<p className="work-stack">{data.technology.map(technology => technology)}</p>
								<SeeWork />
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
};
export default workdetails;
