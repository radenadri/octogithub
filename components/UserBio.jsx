import React from 'react'

const UserBio = ({bio}) => {
  return (
    <p className="font-mono text-sm font-medium text-center text-gray-800 dark:text-gray-300 ">
      {bio === null ? 'Not Available' :bio}
    </p>
  )
}

export default UserBio
