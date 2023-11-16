import Box from "@mui/material/Box"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { Avatar } from "@mui/material";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {children}
            {/* {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )} */}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const SearchBar = () => {
    return (
        <>
            <TextField
            size='small'
                className="lg:w-96 w-full inputRounded m-0 p-0"
                placeholder="Search"
                sx={{ mb:2  }}
                InputProps={{
                    startAdornment: <InputAdornment position="start"> <SearchIcon /></InputAdornment>,
                }}
            />
        </>
    )
}

export const Table = () => {
    return (
        <>
                <div className="relative top-2">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="bg-white !rounded-lg !border !border-gray-200 !shadow-md">
                            <tr className="whitespace-nowrap">

                                <th scope="col" className="py-3 px-3 w-[72px]">
                                    <span> Id 
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3">
                                    <span>From User &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                                <th scope="col" className="py-3">
                                    <span>To User &nbsp;
                                        <UnfoldMoreIcon></UnfoldMoreIcon></span>
                                </th>
                               
                            </tr>

                        </thead>
                        <tbody >
                            <br />
                            <tr className="!border !border-gray-200 !shadow-md whitespace-nowrap">
                                <th scope="row" className="py-4 px-3 font-medium text-gray-900 ">
                                    01
                                </th>
                                <td className="py-4">
                                    <div className="flex items-center">

                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                   <span className="overflow-x-auto w-20"> Bobby Oparaocha</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-20">
                                      Aditiya Kumar
                                      </span>
                                    </div>
                             
                                </td>
                                
                            </tr>
                            <br />
                            <tr className="!border !border-gray-200 !shadow-md whitespace-nowrap">
                                <th scope="row" className="py-4 px-3 font-medium text-gray-900 ">
                                    01
                                </th>
                                <td className="py-4">
                                    <div className="flex items-center">

                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                   <span className="overflow-x-auto w-20"> Bobby Oparaocha</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-20">
                                      Aditiya Kumar
                                      </span>
                                    </div>
                             
                                </td>
                                
                            </tr>
                            <br />
                            <tr className="!border !border-gray-200 !shadow-md whitespace-nowrap">
                                <th scope="row" className="py-4 px-3 font-medium text-gray-900 ">
                                    01
                                </th>
                                <td className="py-4">
                                    <div className="flex items-center">

                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                   <span className="overflow-x-auto w-20"> Bobby Oparaocha</span>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                    <Avatar src="/assets/drakeDp.png"
                                          sx={{ width: 20, height: 20 }}
                                          alt="artist Image"
                                      ></Avatar>
                                      &nbsp;
                                      <span className="overflow-x-auto w-20">
                                      Aditiya Kumar
                                      </span>
                                    </div>
                             
                                </td>
                                
                            </tr>
                            <br />
                        </tbody>
                    </table>
                </div>

        </>
    )
}


const MobileTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{width:"50%"}} label="Income" {...a11yProps(0)} />
                        <Tab sx={{ width: "50%" }}  label="Expense" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <br />
                <TabPanel className="h-[78vh]" value={value} index={0}>
                    <div className="mt-1">
                        <SearchBar />
                      
                        <Table />
                    </div>
                </TabPanel>
                <TabPanel className="h-[78vh]" value={value} index={1}>
                    <div className="mt-1">
                        <SearchBar />
                        
                        <Table />
                    </div>
                </TabPanel>
                
            </Box>
        </>
    )
}
 
export const MobileTable = () => {
    return(
        <>
            <div className=" lg:hidden">
                <MobileTabs/>
            </div>
        </>
    )
}