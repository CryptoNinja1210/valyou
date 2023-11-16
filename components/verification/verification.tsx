import { Button, Card, CardContent,Dialog,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions, Avatar, FormControl, MenuItem, Select, SelectChangeEvent, Link } from "@mui/material"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import classnames from "classnames";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
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
        
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const SelectBox = () =>{
    const [value, setValue] = React.useState('dj');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
    };
    return(
        <div>
             <FormControl className='py-2' sx={{ width:"100%"}}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='dj'>San Francisco</MenuItem>
          <MenuItem value='ls'>Los Angeles</MenuItem>
          <MenuItem value='san'>San Diego</MenuItem>
        </Select>
      </FormControl>
        </div>
    )
}

const ConfirmEmail = () =>{
    return(
        <div className="p-3">
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm code"
            type="password"
            fullWidth
            variant="standard"
          />
          <br />
          <div className="flex py-3">
            <p>Didn&apos;t recieve code?</p>
            &nbsp;&nbsp;
            <Link href="">
                Resend Code
            </Link>
          </div>
        </div>
    )
}

const UploadCard = ({text})=>{
    return(
       <Card sx={{height:"120px",border:"1px solid gray"}}>
        <CardContent>
            <div className=' w-full h-full'>
            <p className='flex justify-center items-center h-[97px]'><b>{text}</b></p>
            </div>
        </CardContent>
       </Card>
    )
}

const DocumentVerification = () =>{
    return(
        <div className="py-3 text-bold">
        <p>1. Upload a picture of your identity card / Drivers License or Passport</p>  
        <p>2. Next upload a picture of yourself holding the ID with todays date written on a piece of paper</p>
        <br />
        <UploadCard text="Upload a picture / Document holding your ID"/>
        </div>

    )
}


const VerificationModel = ({open,handleClose}) =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const next = () => {
        setValue(value+1);
      };

      const previous =() =>{
        if(value== 0){
            handleClose();
        }else{
            setValue(value-1);

        }
      }

    return(
        <div>
        <Dialog maxWidth="xl"  open={open} onClose={handleClose}>
        <DialogTitle>Verify your Account</DialogTitle>
        <DialogContent>
        <div className="bg-blue-100">
        <Tabs
        textColor="inherit"
        indicatorColor={null}
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
    >
 
      <Tab disableRipple icon={<Avatar className={classnames(" border-black border-2 text-[#050f2f]",{'bg-black text-pink-600':value == 0},{'bg-transparent':value != 0})}>01</Avatar>} iconPosition="start" label="Personal Info" {...a11yProps(0)} />
      <Tab disableRipple icon={<Avatar className={classnames(" border-black border-2 text-[#050f2f]",{'bg-black text-pink-600':value == 1},{'bg-transparent':value != 1})}>02</Avatar>} iconPosition="start" label="Confirm email" {...a11yProps(1)} />
      <Tab disableRipple icon={<Avatar className={classnames(" border-black border-2 text-[#050f2f]",{'bg-black text-pink-600':value == 2},{'bg-transparent':value != 2})}>03</Avatar>} iconPosition="start" label="Document Verification" {...a11yProps(2)} />

    </Tabs>
        </div>
        <TabPanel value={value} index={0}>
        <PersonalInfo/>
       </TabPanel>

       <TabPanel value={value} index={1}>
        <ConfirmEmail/>
       </TabPanel>
       <TabPanel value={value} index={2}>
        <DocumentVerification/>
       </TabPanel>
       


        </DialogContent>
        <DialogActions>
          <Button className="pinkGradient text-white" onClick={previous}>Previous</Button>
          <Button className="green-gradient text-white" onClick={next}>Next</Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

const PersonalInfo = () =>{
    return(
        <div className="p-2">
         <div className="flex py-2">
         <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
          /> &nbsp;
          &nbsp;&nbsp;
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </div>

        <div className="flex py-2">
         <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
          /> &nbsp;
          &nbsp;&nbsp;
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Date of birth"
            type="text"
            fullWidth
            variant="standard"
          />
        </div>
        <p><b>City</b></p>
        <SelectBox/>
        </div>
    )
}


const VerficationCard = () =>{
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            <Card className="h-48 flex items-center">
                <CardContent className="text-center">
                    <h2 className="text-pink-400 font-bold">KYC Verification</h2>
                    <p>
                        Please ensure all the information entered is consistent with your ID documents.
                        It will not be able to changed once it has been confirmed.
                    </p>
                    <br />

                    <Button variant="contained" onClick={handleClickOpen} className="bg-black text-white">Click here for Verification</Button>
                    
                </CardContent>
            </Card>
            <VerificationModel open={open} handleClose={handleClose}/>
        </div>
    )
}


export const VerificationComponent = () =>{
    return(
        <>
        <div className="flex justify-center">
            <VerficationCard/>
        </div>
        </>
    )
}