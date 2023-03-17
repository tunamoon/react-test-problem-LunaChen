// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
import React from 'react'

function Button(props) {
  const { variant = 'primary', children, ...rest }
  return (
    <button className={'button ${variant}' {...rest}>
      {children}
    </button>
  )
}

export default Button
