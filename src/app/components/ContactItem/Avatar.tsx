import React from 'react'
import { AvatarWrapper, AvatarImage } from './styles'
import { FaUserAlt } from 'react-icons/fa'

interface Props {
  avatar: string
}

const Avatar: React.FC<Props> = ({ avatar }) => (
  <AvatarWrapper>{avatar ? <AvatarImage src={avatar} alt="avatar" /> : <FaUserAlt size={50} />}</AvatarWrapper>
)

export default Avatar
