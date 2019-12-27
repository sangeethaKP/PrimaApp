import React, {Component} from 'react'
import './style.css'

class EditItemModal extends Component {
  renderToDo () {
    const {handleClose, show} = this.props
    const showHideClassName = show ? 'modal display-block' : 'display-none'
    console.log(`${show} .. ${showHideClassName}`)
    return (
      <div className={this.showHideClassName}>
        <section className='modal-main'>
          Hi
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    )
  }

  render () {
    return (
      <div>
        <div>
          {this.renderToDo()}
        </div>
      </div>
    )
  }
}

export default EditItemModal
