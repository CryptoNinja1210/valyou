import Card from "@mui/material/Card";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Pagination from '@mui/material/Pagination';
import { Avatar } from "@mui/material";


export const WebTable = () =>{
    return (
        <>
            <div className="hidden lg:block">
                <div className="text-left">
                    <p className="text-3xl font-[600]">Transaction &amp; Earning History</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <p>Show</p>
                        &nbsp;&nbsp;
                        <select id="countries" className="bg-gray-50 p-1 border w-[58px] h-[30px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option selected>10</option>
                            <option value="US">20</option>
                            <option value="CA">30</option>
                            <option value="FR">40</option>
                            <option value="DE">50</option>
                        </select>
                        &nbsp;&nbsp;
                        <p>Enteries</p>
                    </div>
                    <TextField
                        size="small"
                        className="lg:w-96 w-full inputRounded m-0 p-0"
                        placeholder="Search"
                        sx={{ m: 1 }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"> <SearchIcon /></InputAdornment>,
                        }}
                    />
                </div>
                <br />
            <Card sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }} variant="outlined">
                <div className="overflow-x-auto relative p-4">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <tr >

                                <th scope="col" className="py-3 px-6">
                                    <span> Id &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span>From User &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span>To User &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span> Tranx Id &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon>
                                    </span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span>Amount&nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3 pl-6">
                                    <span>Reason For Payment&nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    <span>Transation Date -  Time
                                        &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon>
                                    </span>
                                </th>
                                </tr>
                               
                        </thead>
                        <tbody >
                            <br/>
                            <tr className="border border-gray-200 shadow-md whitespace-nowrap">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    01
                                </th>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Bobby Oparaocha
                                      </span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Aditiya Kumar	
                                      </span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    251151
                                </td>
                                <td className="py-4 px-6">
                                    $ 0.0036 VXD
                                </td>
                                <td className="py-4 px-6">
                                    Fees for buying stock from artist
                                </td>
                                <td className="py-4 px-6">
                                    2022/07/25 18:33 PM
                                </td>
                            </tr>
                            <br/>
                            <tr className="border border-gray-200 shadow-md">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    01
                                </th>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Bobby Oparaocha
                                      </span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Aditiya Kumar	
                                      </span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    251151
                                </td>
                                <td className="py-4 px-6">
                                    $ 0.0036 VXD
                                </td>
                                <td className="py-4 px-6">
                                    Fees for buying stock from artist
                                </td>
                                <td className="py-4 px-6">
                                    2022/07/25 18:33 PM
                                </td>
                            </tr>
                            <br/>
                            <tr className="border border-gray-200 shadow-md">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    01
                                </th>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Bobby Oparaocha
                                      </span>
                                    </div>
                                
                                </td>
                                <td className="py-4 px-6">
                                <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-30">
                                      Aditiya Kumar	
                                      </span>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    251151
                                </td>
                                <td className="py-4 px-6">
                                    $ 0.0036 VXD
                                </td>
                                <td className="py-4 px-6">
                                    Fees for buying stock from artist
                                </td>
                                <td className="py-4 px-6">
                                    2022/07/25 18:33 PM
                                </td>
                            </tr>
                            <br />
                        </tbody>
                    </table>
                </div>

                {/* <Card sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }} variant="outlined">
                    <div className="flex justify-between p-4">
                        <span> Id &nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon></span>
                        <span>From User &nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon></span>
                        <span>To User &nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon></span>
                        <span></span>
                        <span> Tranx Id &nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon>
                        </span>
                        <span>Amount&nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon></span>
                        <span>Note&nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon></span>
                        <span>Transation Date -  Time
                            &nbsp;
                            <UnfoldMoreIcon></UnfoldMoreIcon>
                        </span>
                    </div>
                </Card> */}
               {/* <CardContent/> */}
               <div className="flex justify-center p-4">
                        <Pagination count={10} shape="rounded" color="primary" />
                </div>
              </Card>

            </div>
        </>
    )
}