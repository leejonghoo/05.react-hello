class Wrap extends React.Component {
  state = {
    title: '',
    title2: ''
  }
  onChange = (e) => {
    this.setState({
      title: e.target.value,
      title2: e.target.value + e.target.value
    });
  }
  onClose = () => {
    this.setState({
      title: '',
      title2: '',
    })
  }
  render() {
    return (
      <div className="container my-3 p-3">
        <h1>{this.state.title}</h1>
        <h1>{this.state.title2}</h1>
        <div>
          <input className="form-control" onChange={this.onChange} value={this.state.title} />
          <span className="fa fa-times position-absolute close" onClick={this.onClose}></span>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Wrap/>, document.querySelector('#app'));