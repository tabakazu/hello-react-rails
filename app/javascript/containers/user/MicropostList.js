import React from 'react'
import { connect } from 'react-redux'

// Material UI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'

class MicropostList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const user = this.props.state.user
    const microposts = this.props.state.user.microposts ? this.props.state.user.microposts : []
    const micropostList = microposts.map((micropost, i) =>
      <TableRow key={i}>
        <TableCell>
          <div style={{ margin: 10 }}>
            <Typography color="textSecondary">
              {user.name}
            </Typography>

            <Typography variant="subtitle1">
              {micropost.content}
            </Typography>

            <Typography variant="caption" color="textSecondary">
              {micropost.created_at}
            </Typography>
          </div>
        </TableCell>
      </TableRow>
    )

    if (microposts.length == 0) {
      return false
    }

    return (
      <div style={{ margin: 10 }}>
        <Card>
          <CardContent>
            <Typography color="textSecondary">
              Micropost
            </Typography>
          </CardContent>
          
          <Table>
            <TableBody>
              {micropostList}
            </TableBody>
          </Table>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}
export default connect(mapStateToProps)(MicropostList)
