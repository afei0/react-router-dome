
import React from 'react'
import {Route,Link,Redirect} from 'react-router-dom'

let Dijia=(props)=>{
  const { name } = props.match.params
  let text = name
  if(name==='dijia'){
  return <div>{text}</div>
  }else if(name==='haha'){
    return<div>haha</div>
  }else{
    return<Redirect from={props.match.url} to='/404' />
  }
}

// let Haha=()=><div>haha</div>
let Select = () => <div>展示默认信息，exact代表点击其他之后消失</div>
class About extends React.Component {
  render () {
    const{match}=this.props
    console.log(this.props.match.url)
  return(
      <div>
        <h1>About</h1>
        <span onClick={()=>{this.props.history.goBack()}}>返回来的地方</span><br/>
        <span onClick={()=>{this.props.history.push('/')}}>返回首页</span>
        <ul>
          <li><Link to={`${match.url}/dijia`}>第嘉</Link></li>
          <li><Link to={`${match.url}/haha`}>哈哈</Link></li>
        </ul>
        <Route path={`${match.url}/:name`} component={Dijia}/>
        <Route path={match.url} exact component={Select}/>
      </div>
    )
  }
}

export default About;
