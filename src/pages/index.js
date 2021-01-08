import React, { useEffect, useState } from "react"

export default function Home() {

  const [data, setData] = useState("");

  useEffect(() => {
    (async() => {
      const response = await fetch('.netlify/functions/hello')
      const tempData = await response.json();
      setData(tempData)
    }
    )();
  }, [])

  return (
    <div>
      <h1>Serverless Netlify Function</h1>
      {data.message}
    </div>
  )
}
