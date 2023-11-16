import { Avatar, Button, Card,CardContent } from "@mui/material"

import StarRateIcon from '@mui/icons-material/StarRate';


const PreviousHistory = () =>{
    return(
        <div className="my-2">
     
          <Card>
            <CardContent>
                <div className="flex mx-2 items-center">
                <Avatar className='w-[70px] h-[70px]' alt="Travis Howard" src="/assets/drakeDp.png" />
                <div className="flex-col mx-2 items-center">
                    <p><b>Bobby</b></p>
                    <p>Rapper</p>
                </div>
                </div>
                <div className="my-2">
                  <StarRateIcon sx={{fill:"yellow"}}></StarRateIcon>
                  <StarRateIcon sx={{fill:"yellow"}}></StarRateIcon>
                  <StarRateIcon sx={{fill:"yellow"}}></StarRateIcon>
                  <StarRateIcon sx={{fill:"yellow"}}></StarRateIcon>
                  </div>
                  <p className="text-gray-400"><i>Working with this guy is an amazing experience</i></p>

            </CardContent>
          </Card>
        </div>
      
    )
}

export const Reviews = () =>{
    return(
        <div>
        <PreviousHistory/>
        </div>
    )
}