import user from './user'


const json = {
	user
}

export default (name) => new Promise(resolve => resolve(json[name]), 500)