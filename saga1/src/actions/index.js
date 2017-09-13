
export const POSTS_FETCH_REQUESTED = 'POSTS_FETCH_REQUESTED'

export const POSTS_FETCH_SUCCEEDED = 'POSTS_FETCH_SUCCEEDED'
export const POSTS_FETCH_FAILED = 'POSTS_FETCH_FAILED'


export const fetchPosts = () => ({
  type: POSTS_FETCH_REQUESTED
})

export const fetchPostsSucceeded = posts => ({
  type: POSTS_FETCH_SUCCEEDED,
  posts,
  receivedAt: Date.now()
})

export const fetchPostsFailed = message => ({
  type: POSTS_FETCH_FAILED,
  message
})

