const routers = [
	{
		path: '/',
      	name: 'index1',
      	component: require('./views/index1.vue')
    },
    {
		path: '/index1',
      	name: 'index1',
      	component: require('./views/index1.vue')
    },
    {
		path: '/index2',
      	name: 'index2',
      	component: require('./views/index2.vue')
    }
];

export default routers;