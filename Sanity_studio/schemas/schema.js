import Home from './Pages/Home';
import Work from './Pages/Work';
import About from './Pages/About';

import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
	name: 'Portfolio-v2',
	types: schemaTypes.concat([Home, Work, About]),
});
