import * as React from 'react';
import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DataGrid } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import Moment from 'moment';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';


function Datatable() {
  const rows = [
    { id: 1, col1: "Ant", col2: "Tomato" },
    { id: 2, col1: "Dog", col2: "Potato" },
    { id: 3, col1: "Monkey", col2: "Carrot" },
    { id: 4, col1: "Tiger", col2: "Corn" },
    { id: 5, col1: "Fish", col2: "Onion" },
    { id: 6, col1: "Cat", col2: "Lemon" },
    { id: 7, col1: "Panda", col2: "Beans" },
    { id: 8, col1: "Elephant", col2: "Cucumber" },
    { id: 9, col1: "Giraffe", col2: "Garlic" },
    { id: 10, col1: "Zebrax", col2: "Chilli" },
    { id: 11, col1: "Ant", col2: "Tomato" },
    { id: 12, col1: "Dog", col2: "Potato" },
    { id: 13, col1: "Monkey", col2: "Carrot" },
    { id: 14, col1: "Tiger", col2: "Corn" },
    { id: 15, col1: "Fish", col2: "Onion" },
    { id: 16, col1: "Cat", col2: "Lemon" },
    { id: 17, col1: "Panda", col2: "Beans" },
    { id: 18, col1: "Elephant", col2: "Cucumber" },
    { id: 19, col1: "Giraffe", col2: "Garlic" },
    { id: 20, col1: "Zebrax", col2: "Chilli" },
  
  ];
  
  const columns = [
    { field: "id", headerName: 'ID', width: 200 },
    { field: 'col1', headerName: 'Animal', width: 300 },
    { field: 'col2', headerName: 'Vegetable', width: 300 },
  ];
  return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
  );
}

function SearchBar() {
  const top100Films = [
    { label: 'The Shawshank Redemption'},
    { label: 'The Godfather' },
    { label: 'The Godfather: Part II',},
    { label: 'The Dark Knight'},
    { label: '12 Angry Men'},
    { label: "Schindler's List"},
    { label: 'Pulp Fiction'},
    { label: 'City of God'},
    { label: 'Se7en'},
    { label: 'The Silence of the Lambs'},
  ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      xs={{ width: 50 }}
      md={{ width: 100 }}
      style={{paddingRight:'5px', paddingBottom:'5px'}}
      renderInput={(params) => <TextField {...params} label="Autocomplete" />}
    />
  );
}

function Datetime() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs} xs={{ width: 100 }}>
          <DemoItem style={{padding:0}}>
            <MobileDateTimePicker 
            inputFormat="DD-MM-YYYY" 
            style={{padding:0}} 
            defaultValue={dayjs()}  
            format="DD/MM/YYYY HH:mm"
            xs={{ width: '100px' }} />
            
          </DemoItem>
      </LocalizationProvider> 
  );
}

function BasicButtons() {
  const handleClick = event => {
    event.currentTarget.disabled = true;
    console.log('onClick Blocking Ui');
  };
  return (
    <div>
      <button className='button'  onClick={handleClick}>Blocking</button>
    </div>
  );
}


function Result() {
  return (
  <div>
    <div className='headText'>
      <label>Test Frontend</label>
    </div>
      <Box xs={{ width: '100%' }} style={{padding:'8px'}}>
        <Grid container >
          <Grid item xs={6} md={6} lg={3}>
            <SearchBar />
          </Grid>
          <Grid item xs={6} md={6} lg={8} style={{display:'flex'}}>
            <BasicButtons />
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <Datetime />
          </Grid>
          <Grid item xs={12} md={12} style={{paddingTop: 10}}>
            <Datatable />
          </Grid>
        </Grid>
      </Box>
  </div>
  );
}

export default function App() {
  return <Result />;
}

