import React from 'react'
import { Task } from './Task'

export const ResultItem = ({idx , task}) => {
  return (
    <tr>
        <td>{idx}</td>
        <td>{task.name}</td>
        <td>{task.ans}</td>
        <td>{task.true}</td>
    </tr>
  )
}