import React, { useEffect, useState } from 'react'
import { usePapaParse } from 'react-papaparse';
import productionFile from './data/completions.csv'
import './Completions.css'

export const Completions = () => {

  const [completionsDataHeader, setCompletionsDataHeader] = useState([]);
  const [completionsDataBody, setCompletionsDataBody] = useState([]);
  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    readRemoteFile(productionFile, {
      complete: (results) => {
        setCompletionsDataHeader(results.data[0]);
        setCompletionsDataBody(results.data.slice(1, 50))
        console.log(results.data.slice(1, 50))
      },
    });
  }, [])



  return (
    <>
      <div>Completions</div>
      <table cellSpacing="0">
        <thead>
          <tr>
            {
              completionsDataHeader.map((data, index) => (
                <th key={index}>{data}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            completionsDataBody.map((data, index) => (
              <tr key={index}>
                {data.map((info,index) => (
                  <td key={index}>{info}</td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table></>
  )
}
/* https://github.com/Bunlong/react-papaparse/blob/v4.0.0/examples/readRemoteFile.tsx */