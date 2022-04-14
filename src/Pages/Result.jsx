import React from "react";
import { ResultItem } from "../components/Resultitem";

const mockTasks = [
    {
        name:'lorem ipsum dolor sit',
        ans:'lorem',
        true:'dolor'
    },
    {
        name:'lorem ipsum dolor sit',
        ans:'lorem',
        true:'dolor'
    },
    {
        name:'lorem ipsum dolor sit',
        ans:'lorem',
        true:'dolor'
    },
]

export const Result = () => {
  return (
      <div className="max-w-7xl mx-auto mt-20"> 
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Savol</th>
            <th>Javob</th>
            <th>togri javoblar</th>
          </tr>
        </thead>
        <tbody>
            {
                mockTasks.map((task , index) => (
                    <ResultItem key={index + 1} idx={index} task={task}/>
                ))
            }
        </tbody>
      </table>
    </div>
    </div>
  );
};