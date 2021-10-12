const Work = {
	title: 'Work',
	name: 'work',
	type: 'document',
	fields: [
		{
			title: 'Project Type',
			name: 'projecttype',
			type: 'string',
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Work Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Technology',
			name: 'technology',
			type: 'array',
			description: 'Use # with every new entry',
			of: [
				{
					type: 'string',
				},
			],
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Work URL',
			name: 'workurl',
			type: 'url',
		},
	],
};

export default Work;
