import React,  { useEffect, useState }  from 'react'
import Seo from 'layouts/Seo';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import moment from 'moment';
import { Link } from "react-router-dom";
import slugify from 'slugify';

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = useState(1);
    const [internationalSeries, setInternationalSeries] = useState([]);
    const [domesticSeries, setDomesticSeries] = useState([]);
    const [leagueSeries, setLeagueSeries] = useState([]);
    const [womenSeries, setWomenSeries] = useState([]);


    useEffect(() => {


      const fetchData = async (url) => {
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': 'f36ef967ecmsh0b37973a8f51df6p1d6d48jsn642223c4c372',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
              }
            };

          let responseData = [];

           await fetch(url, options)
            .then(res => res.json())
            .then((json) => {
              responseData = json.seriesMapProto;
            })
            .catch((err) => {
               responseData = [];
              console.log(err);
            });

            return responseData;

       

          
      };

      const getInternationalSeries = async () => {
        const internationalUrl = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international';
        const internationalSeriesData = await fetchData(internationalUrl);
        console.log(internationalSeriesData)
        if (internationalSeriesData !== undefined){
          setInternationalSeries(internationalSeriesData);
        }
        console.log(internationalSeries)

        
      }

      const getDomesticSeries = async () => {
        const domesticUrl = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/domestic';
        const domesticSeriesData = await fetchData(domesticUrl);
        console.log(domesticSeriesData)
        if (domesticSeriesData !== undefined){
          setDomesticSeries(domesticSeriesData);
        }
        console.log(domesticSeries)

        
      }

      const getLeagueSeries = async () => {
        const leagueUrl = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/league';
        const leagueSeriesData = await fetchData(leagueUrl);
        console.log(leagueSeriesData)
        if (leagueSeriesData !== undefined){
          setLeagueSeries(leagueSeriesData);
        }
        console.log(domesticSeries)
        
      }

      const getWomenSeries = async () => {
        const womenUrl = 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/women';
        const womenSeriesData = await fetchData(womenUrl);
        console.log(womenSeriesData)
        if (womenSeriesData !== undefined){
          setWomenSeries(womenSeriesData);
        }
        console.log(womenSeries);
       
      }

      getInternationalSeries();
      getDomesticSeries();
      getLeagueSeries();
      getWomenSeries();

      
  }, []);



    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#international"
                  role="tablist"
                >
                  <i className="fas fa-globe text-base mr-1"></i> International
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#domestic"
                  role="tablist"
                >
                  <i className="fas fa-landmark text-base mr-1"></i>  Domestics & Others
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#league"
                  role="tablist"
                >
                  <i className="fas fa-trophy text-base mr-1"></i>  T20 Leagues
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#women"
                  role="tablist"
                >
                  <i className="fas fa-venus text-base mr-1"></i>  Women
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="international">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                <table className="w-full">
                                
                                        <thead className="border-b text-left bg-gray-800">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Month
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Series Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    
                                          {
                                          
                                         internationalSeries.map(({ date, series}) => (
                                            <>
                                                <tr  className="border-b bg-gray-200">
                                                      <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{date}</td>
                                                  </tr>
                                                {series.map(({ id, name, startDt, endDt }) => (
                                                    <tr  className="bg-white border-b hover:bg-gray-100">
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <p>{moment.unix(startDt/1000).format('D MMM')} - {moment.unix(endDt/1000).format('D MMM')}</p>

                                                      </td>
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <Link className='hover-text' 
                                                         to={'/series/'+id+'/'+ slugify(name) }
                                                         params={{ id: id, slug: slugify(name)  }}
                                                        >
                                                          <h3>{name}</h3>
                                                        </Link>
                                                      </td>
                                                  </tr>
                                                ))}
                                            </>
                                        ))  
                                        
                                        }

                             
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="domestic">
                  <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                <table className="w-full">
                                
                                        <thead className="border-b text-left bg-gray-800">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Month
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Series Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    
                                          {
                                          
                                          domesticSeries.map(({ date, series}) => (
                                            <>
                                                <tr  className="border-b bg-gray-200">
                                                      <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{date}</td>
                                                  </tr>
                                                {series.map(({ id, name, startDt, endDt }) => (
                                                    <tr  className="bg-white border-b hover:bg-gray-100">
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <p>{moment.unix(startDt/1000).format('D MMM')} - {moment.unix(endDt/1000).format('D MMM')}</p>

                                                      </td>
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                      <Link className='hover-text' 
                                                         to={'/series/'+id+'/'+ slugify(name) }
                                                         params={{ id: id, slug: slugify(name)  }}
                                                        >
                                                          <h3>{name}</h3>
                                                        </Link>
                                                      </td>
                                                  </tr>
                                                ))}
                                            </>
                                        )) 
                                        
                                        }

                             
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="league">
                  <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                <table className="w-full">
                                
                                        <thead className="border-b text-left bg-gray-800">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Month
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Series Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    
                                          {
                                          
                                          leagueSeries.map(({ date, series}) => (
                                            <>
                                                <tr  className="border-b bg-gray-200">
                                                      <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{date}</td>
                                                  </tr>
                                                {series.map(({ id, name, startDt, endDt  }) => (
                                                    <tr  className="bg-white border-b hover:bg-gray-100">
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <p>{moment.unix(startDt/1000).format('D MMM')} - {moment.unix(endDt/1000).format('D MMM')}</p>
                                                      </td>
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                      <Link className='hover-text' 
                                                         to={'/series/'+id+'/'+ slugify(name) }
                                                         params={{ id: id, slug: slugify(name)  }}
                                                        >
                                                          <h3>{name}</h3>
                                                        </Link>
                                                      </td>
                                                  </tr>
                                                ))}
                                            </>
                                        )) 
                                        
                                        }

                             
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="women">
                  <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-4 inline-block w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                <table className="w-full">
                                
                                        <thead className="border-b text-left bg-gray-800">
                                            <tr>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Month
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                    Series Name
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    
                                          {
                                          
                                          womenSeries.map(({ date, series}) => (
                                            <>
                                                <tr  className="border-b bg-gray-200">
                                                      <td colSpan={2} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{date}</td>
                                                  </tr>
                                                {series.map(({ id, name, startDt, endDt  }) => (
                                                    <tr  className="bg-white border-b hover:bg-gray-100">
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <p>{moment.unix(startDt/1000).format('D MMM')} - {moment.unix(endDt/1000).format('D MMM')}</p>
                                                      </td>
                                                      <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                      <Link className='hover-text' 
                                                          to={'/series/'+id+'/'+ slugify(name) }
                                                          params={{ id: id, slug: slugify(name)  }}

                                                        >
                                                          <h3>{name}</h3>
                                                        </Link>
                                                      </td>
                                                  </tr>
                                                ))}
                                            </>
                                        )) 
                                        
                                        }

                             
                                          
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default function Index() {
  return (
    <>
        <Seo 
              
              title="CRICDICTION - Series" 
              description="Get cricket news, schedules, match, team stats, fixtures, series results, video highlights, news, and more on CRICDICTION." 
            
        />
        <IndexNavbar fixed />
        <div>
            <h1>Cricket Schedule</h1>
        </div>

        <section className="header relative mb-8 pt-24 items-center text-center justify-center flex max-h-860-px">
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full items-center justify-center px-4">
                    <div className="post-title">
                        <h1 className="font-bold text-4xl text-blueGray-600">
                            Series 
                        </h1>
                    </div>
                    <p>Get All Cricket Schedule</p>
                </div>
            </div>
        </section>

        
        <section className="pb-40 pt-8 relative bg-blueGray-100">
            <div className="container mx-auto">
                <Tabs color="pink" />
            </div>
        </section>
    </>
    
  )
}
