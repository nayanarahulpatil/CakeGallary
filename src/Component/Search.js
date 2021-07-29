import queryString from "query-string"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CakeCard } from './Cake_card'
import Loader from "react-loader-spinner"
import Navbar from '../Component/Navbar';

export function Search(props) {
  var [cakeresults, setCakeresults] = useState([])
  var [loader, setloader] = useState(true)
  var query = queryString.parse(props.location.search).q
  console.log("query object", query)


  useEffect(() => {
    let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query
    axios(
      {
        method: 'get',
        url: apiurl
      }
    ).then((response) => {

      setCakeresults(response.data.data)
      console.log(response.data.data)
      setloader(false)
    }, (error) => {
      console.log(error)
    })

  }, [query])

  return (
    <>
      <Navbar ></Navbar>
      {loader && <div className="d-flex vh-100 ">
        <Loader className="w-100 mt-5  d-flex justify-content-center align-items-center"
          type="ThreeDots" color="#00BFFF" height={80} width={80} /></div>}

      <div className="container-fluid  p-5 h-100">
        <div class="d-flex justify-content-around flex-wrap flex-row w-100">
          {!loader && cakeresults == 0 &&
          <div className="mt-5">
            <h1>Cake not found</h1>
            </div>
          }
          {cakeresults.map((each, index) => {

            return <CakeCard key={index} data={each} />
          })}

        </div>
      </div>
    </>
  )
}
