
import React, { Component } from 'react';

export default
class SMenu extends Component {
  constructor(props) {
    super(props)

    console.log('SMenu constructor')

    this.keys = React.Children.map( props.children, (child) => {
      //console.log(child)
      //console.log(sec)
//      return child.key
      // return {
      //   ia: child.props.id,
      //   name: child.props.name
      // }
      return child.props.name
    })
    //console.log(this.keys)

    this.subComponents = React.Children.toArray( props.children )
    // this.subComponents = React.Children.map( props.children, (child) => {
    //   return <React.Fragment>{child}</React.Fragment>
    // })
    // console.log(ar2)
    this.state = {
      //menu_id: ,
      comp_ind: 0
    }
    const comp0 = this.subComponents[0]
    const comp1 = React.cloneElement( comp0 )
    const comp2 = React.createElement( comp0.type )

    console.log(comp0)
    console.log(comp1)
    console.log(comp2)
  }

  onSelect = (e) => {
    e.preventDefault()

    let new_ind = e.target.dataset.ind
    if (new_ind !== undefined) {
      new_ind = parseInt( new_ind, 10 )
      this.setState({
        comp_ind: new_ind
      })
    }
  }
  render() {
    console.log('SMenu render')

    const {comp_ind} = this.state

    return (
      <div>
        <div className='MenuTabs'>
          {this.keys.map( (o, ind) => (
            <div className={`menu-item ${ind===comp_ind ? 'active' : ''}`} key={ind}
              onClick={this.onSelect} data-ind={ind}
            >
              {o}
            </div>
            ) 
          )}
        </div>
        <div className='Content'>
          {this.subComponents[comp_ind]}
        </div>
        <div className='Content'>
          {this.props.children}
        </div>
        <div className='Content'>
          cloned
        </div>
        <div className='Content'>
          {this.props.children}
        </div>
      </div>
    );
  }
  componentDidMount () {

    console.log('SMenu ComponentDidMount')
    console.log(this.props.children)
  }
  componentDidUpdate() {
    console.log('SMenu ComponentDidUpdate')
    console.log(this.props.children)
  }
}

