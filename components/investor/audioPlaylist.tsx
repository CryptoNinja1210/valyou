import { Button, Card, CardContent } from "@mui/material"



const PlaylistHead = () =>{
    return(
        <div className="p-3">
        <div className="border border-slate-300	rounded">
            <div className="flex justify-between items-center p-2">
                <div className="flex flex-col items-center">
                    <p><b>#</b></p>
                </div>
                <div className="flex flex-col items-center">
                    <p><b>Song Title</b></p>
                </div>
                <div className="flex flex-col items-center">
                    <p><b>Song Valyou</b></p>
                </div>
                <div className="flex flex-col items-center">
                    <p><b>Action</b></p>
                </div>
            </div>
        </div>
    </div>
    )
}


const AudioList = () =>{

    var arrayTable = [
        {id:0, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
        {id:1, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
        {id:2, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
        {id:3, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
        {id:4, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
        {id:5, name:"Bobby Oparaocha", songName:"Single Ladies",valyou:"100,000,000.00"},
    ];

    return(
        <div>
            {/* <Card>
                <CardContent>
                    <div className="flex justify-between whitespace-nowrap">
                        <p>1.</p>
                        <p><b>Taking to a holiday</b></p>
                        <p>Bobby K.9</p>
                        <Button variant="contained" className="text-white green-gradient">You Earned $3.00</Button>
                    </div>
                </CardContent>
            </Card> */}
            <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="bg-white rounded-lg border border-gray-200 shadow-md">
                            <tr >

                                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                                    <span> # &nbsp;
                                        </span>
                                </th>
                                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                                    <span>Song Title </span>
                                </th>
                                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                                    <span>Song Valyou </span>
                                </th>
                                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                                    <span> Action
                                    </span>
                                </th>
                               
                                </tr>
                               
                        </thead>
                        <tbody >
                            <br/>
                            {
                                arrayTable.map((value,index)=>{
                                    return(
                                        <>
                                 <tr key={index} className="border border-gray-200 shadow-md">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap 
                                ">
                                    {index+1}
                                </th>
                                <td className="py-4 px-6 whitespace-nowrap">
                                    {/* <Avatar>
                                        <FolderIcon />
                                        </Avatar> */}
                                    

                                    Talking to a Holiday
                                </td>
                                <td className="py-4 px-6">
                                   Bobby K.9
                                </td>
                               
                                 <td className="py-4 px-6 whitespace-nowrap">
                                 <Button variant="contained" className="!text-white green-gradient">You Earned $3.00</Button>
                                </td>
                            </tr>
                                        </>
                                    )
                                })
                            }
                           
                           
                        </tbody>
                    </table>
        </div>
    )
}


export const AudioPlaylist = () =>{
    
    
    return(
        <>
        {/* <PlaylistHead/>
        <br /> */}
        <AudioList/>
        </>
    )
}