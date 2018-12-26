import React from 'react'
import { connect } from 'react-redux'
import FollowButton from '../containers/user/FollowButton'
import MicropostList from '../containers/user/MicropostList'
import { fetchUserRequest } from '../actions/user'
import { fetchFollowState } from '../actions/follow'

// Material UI
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(fetchUserRequest({
      user: {
        name: this.props.match.params.username
      }
    }))

    this.props.dispatch(fetchFollowState({
      user: {
        name: this.props.match.params.username
      }
    }))
  }

  render () {
    const user = this.props.state.user
    const microposts = this.props.state.user.microposts ? this.props.state.user.microposts : []
    return (
      user.isFailed ? (
        <div>
          <p>Sorry, that page doesn’t exist!</p>
        </div>
      ) : (
        <div>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4}>
              <div style={{ margin: 10 }}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary">
                      User
                    </Typography>

                    <Typography variant="headline">
                      {user.name}
                    </Typography>

                    <Typography color="textSecondary">
                      Email : {user.email}
                    </Typography>

                    <div style={{ margin: 10 }}>
                      <FollowButton {...this.props} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Grid>

            <Grid item xs={12} md={8}>
              <MicropostList />
            </Grid>
          </Grid>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(User)
