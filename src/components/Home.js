import React from 'react'
//import { Consumer } from '../store'

const Home = ({
  data, loading, actions
}) => (
  <div>
    <span onClick={actions.fetch}>click</span>
    {console.log(loading)}
    {loading ? <div>loading...</div> : <div>not loading</div>}
  </div>
)

export default Home
