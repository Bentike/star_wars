import React from 'react';
import OpeningCrawl from './OpeningCrawl';

function MovieData({movieCrawl}) {
  return (
    <>
       <OpeningCrawl crawl={movieCrawl? movieCrawl : "Select A Movie"}/>
    </>
  )
}

export default MovieData;