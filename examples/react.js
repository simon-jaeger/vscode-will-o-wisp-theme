// component
////////////////////////////////////////////////////////////////////////////////

import React from 'react'

class Component extends React.Component {
  render() {
    return (
      <Parent>
        <form className="foobar">
          <h2>Title</h2>
          <input type="text" required placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      </Parent>
    )
  }
}

export default Component

// rendering
////////////////////////////////////////////////////////////////////////////////

render(<Component/>, document.querySelector('#main'))
