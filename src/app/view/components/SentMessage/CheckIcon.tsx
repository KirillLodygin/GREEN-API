import React from 'react'
import { FaCheck, FaCheckDouble } from 'react-icons/fa'
import { CheckIcon } from './styles'

interface Props {
  status: string
}

const CheckIconComponent: React.FC<Props> = ({ status }) => (
  <CheckIcon isread={(status === 'read').toString()}>{status !== 'sent' ? <FaCheckDouble /> : <FaCheck />}</CheckIcon>
)

export default CheckIconComponent
