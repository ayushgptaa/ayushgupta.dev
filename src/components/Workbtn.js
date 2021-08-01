/** @format */

import React from 'react';
import { Icon } from '@iconify/react';
import arrowUpRight from '@iconify/icons-bi/arrow-up-right';

const Workbtn = () => {
	return (
		<button className="Seework">
			<a href="https://google.com" target="_blank">
				See work
			</a>
			<Icon icon={arrowUpRight} style={{ color: '#DACFC0' }} />
		</button>
	);
};
export default Workbtn;
