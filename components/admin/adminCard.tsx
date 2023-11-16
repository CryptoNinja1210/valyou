import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export const AdminCard = () =>{
    return(
        <>
         <div>
    <Card sx={{backgroundColor:"black",color:"white"}} className="bg-black text-white">
      <CardContent>
        <div className='flex justify-between items-center'>
            <div className='flex px-2'>
            <Avatar sx={{width: 60, height:60}} className='relative top-1' alt="Travis Howard" src="/assets/valyoux_black_logo.svg" />
            <div className='flex-col px-4'>
                <p className='lg:text-1xl font-bold text-white'>Valyou X</p>
                <p className="text-sm text-white">Company</p>
                <p className='text-sm text-white'> Admin</p>
            </div>
            </div>
            <div className='flex-col'>
                
                <p className="text-sm text-white">Market Value</p>
                <p className='lg:text-2xl font-bold text-white'> $103,910,000</p>
            </div>
        </div>
      </CardContent>
      
    </Card>

         </div>
        
        </>
    )
}