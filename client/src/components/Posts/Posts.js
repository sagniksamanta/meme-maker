import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import PostCard from './PostCard'

const Posts = () => {
	return (
		<div className='App'>
			<Grid container>
				<Grid item container xs={12} justifyContent='center'>
					<Grid item xs={3} >
						<PostCard />{' '}
                        <br/>
                        <PostCard />{' '}
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Posts;