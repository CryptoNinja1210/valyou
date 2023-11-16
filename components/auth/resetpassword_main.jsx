import {
    Button,
    Checkbox,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Select,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
  } from "@mui/material";
  import Box from "@mui/material/Box";
  import * as React from "react";
  
  import TextField from "@mui/material/TextField";
  import MenuItem from "@mui/material/MenuItem";
  import { useState, useMemo, useEffect } from 'react'
  import countryList from 'react-select-country-list'
  import axios from 'axios';
  import Link from "next/link";
  
  const ResetPasswordComponent = () => {

    return (
      <>
      <main className="container mx-auto">
        <Grid
          className="flex justify-center items-center space-between"
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 3, sm: 8, md: 12 }}
        >
          <Grid item md={6} xs={3}>
            <div className="p-8">
              <p className="font-bold musicArtistFont">
                Welcome to <span className="financial_stk">Valyou X</span>
              </p>
              <p className="font-medium text-lg text-rose-800">
                Be the first to know when we launch!
              </p>
              <div className="ms_desc">
                If you’re interested in participating as an early adopter, you
                can fill out the survey and apply to get exclusive access. We
                have over 50,000+ in our email list would you like to skip the
                queue?
              </div>
              <br />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="p-4">
              <p className="font-bold text-lg text-center sm:text-left ml-3">
                Reset Your Password
              </p>
              <br />
              <Box
                component="form"
                style={{marginLeft:'10px'}}
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
                
              >
                <div className="flex-col">
                  <TextField
                    required
                    className="w-11/12"
                    id="outlined-required"
                    placeholder="Email address"
                  />
                    <TextField
                    required
                    className="w-11/12"
                    id="outlined-required"
                    placeholder="New Password"
                  />
                         <TextField
                    required
                    className="w-11/12"
                    id="outlined-required"
                    placeholder="Confirm New Password"
                  />
                  <br />
                  <br />
                  <div className="ml-2 w-11/12">
                  <Button
                    className="token w-[100%] text-white mx-2.5 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center "
                    color="primary"
                    variant="contained"
                  >
                    Reset
                  </Button>
                  <br />
             
                  </div>
                </div>
              </Box>
              <p className="text-center pt-8">Remember It ? <Link href="/login"><span className="text-[#FF0093] bold cursor-pointer">SignIn Here</span></Link></p>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
    )
  }
  
  export default ResetPasswordComponent