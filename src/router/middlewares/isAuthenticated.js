export default ({store, router, next}) => {
	if(store.state.auth.token && store.state.auth.user)
		router.replace({
			name: 'home'
		})
	next();
}