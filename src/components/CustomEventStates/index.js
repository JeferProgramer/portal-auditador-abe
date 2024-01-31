import React from 'react'
import { StatusInidicator } from '../StatusIndicator'

const CustomEventStates = ({event}) => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <StatusInidicator state={event.extendedProps.state} />
    </div>
  )
}

export default CustomEventStates
