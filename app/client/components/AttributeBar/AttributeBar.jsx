import React, {PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

/*
Renders a bar that indicates the different levels of some common
attributes that champions have, such attack, defense, etc
  - attribute : name of the attribute the bar represents
  - value : number [0-10] indicating the level of that attribute
*/
const AttributeBar = ({ attribute, value }) => {

  return (
    <div styleName='container' className='row'>
      <div className='col-sm-2'>
        <p className='text-capitalize' styleName='label'>{ attribute }</p>
      </div>

      <div className='col-sm-10'>
        <div styleName={'barContainer--' + attribute}>
          <div styleName="bar" style={{ width: value * 10 + '%' }}></div>
        </div>
      </div>
    </div>
  )
}

AttributeBar.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default CSSModules(AttributeBar, styles)
