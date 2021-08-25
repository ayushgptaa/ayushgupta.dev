/** @format */

import React from 'react';
import { Icon } from '@iconify/react';
import arrowUpRight from '@iconify/icons-bi/arrow-up-right';

const Workbtn = ({ url }) => {
	return (
		<a className="Seework" href={url} target="_blank" role="button" aria-label="Seework button">
			<span>SEE WORK</span>
			<Icon icon={arrowUpRight} style={{ color: '#DACFC0' }} />
		</a>
	);
};
export default Workbtn;
