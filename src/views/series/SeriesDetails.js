import React from 'react'
import { useParams } from 'react-router-dom';

export default function SeriesDetails() {
    const params = useParams()
  return (
    <div>SeriesDetails {params.id}  {params.slug}</div>
  )
}
