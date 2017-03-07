const renderLocationTest = ( { renderLocation } ) => (
  <div>
    <h1>This page was rendered on the { renderLocation }</h1>

    <h3>This page describes two awesome features the new blog has</h3>

    <h4>Server & Client side rendering</h4>

    <p>The initial render occurs on the server and all subsequent internal navigation occurs on the client.</p>
    <p>Navigate using the navbar links and refresh the page with cmd+r or ctrl+r to see this in action</p>
    <p>The advantage of this architecture is significantly faster load times and no wasted get requests, which is the optimal strategy for server performance</p>


    <h4>Hot Module Reloading in Production</h4>

    <p>I can push new code anytime to every user without them noticing -> no refresh needed</p>

    <h4>Agressive Pre-Fetching</h4>

    <p>Open up your console to the network tab and refresh the page with cmd+r or ctrl+r to see possible future pathways prefetched</p>

    <style jsx>{`
      h1, h3, h4 {
        margin-top: 30px;
        color: black;
      }
      p {
        margin-top: 10px;
        color: black;
        font-size: 15px;
        line-height: 20px;
      }
    `}</style>

  </div>
)

renderLocationTest.propTypes = {
    renderLocation: React.PropTypes.string.isRequired
}

export default renderLocationTest
