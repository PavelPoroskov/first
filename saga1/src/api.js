//import fetch from 'isomorphic-fetch'

export function apiFetchPosts() {
	const reddit = 'reactjs'
	
    return fetch(`http://www.reddit.com/r/${reddit}.json` )
            .then(response => response.json() )
            .then(json => json.data.children.map(child => child.data) )
}