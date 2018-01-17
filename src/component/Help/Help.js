import React from 'react'
import{withRouter} from 'react-router-dom'

class Help extends React.Component {
  render () {
  return(
    <div>
      <button onClick={()=>{this.props.history.push('/')}}>首页</button>
    </div>
  )
  }
}

export default withRouter(Help);
