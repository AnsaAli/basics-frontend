import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <div>Error
        <p>{err.status}</p>
    </div>

  )
}

export default Error