import React from 'react'
import { connect } from 'react-redux'
import MicropostForm from '../containers/mypage/MicropostForm'
import TimelineList from '../containers/mypage/TimelineList'

// Material UI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

class MyPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const user = this.props.state.login.user
    return (
      <div>
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
            </CardContent>
          </Card>
        </div>

        <MicropostForm />

        <TimelineList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MyPage)
