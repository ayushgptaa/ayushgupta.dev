import Image from 'next/image';
import SeeWork from './Workbtn';
import { useNextSanityImage } from 'next-sanity-image';
import client from '../../client';

const workdetails = ({ result }) => {
	return (
		<>
			{result.map(data => {
				return (
					<section className="work-wrapper" key={data._id}>
						<div className="work-type">
							<h3>{data.projecttype}</h3>
						</div>
						<div className="Work-info">
							<h2 className="work-name">{data.title}</h2>
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
