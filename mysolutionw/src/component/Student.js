import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,paperStyle,Button } from '@mui/material';
import { padding } from '@mui/icons-material';

export default function Student() {
    
    // const classes=useStyles();
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const[students,setStudents]=React.useState([])
    //const classes=useStyles();
   // const[data,setData]=React.useState([]);
    const handleClick=(e)=>
    {
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student Added")

        })
}
React.useEffect(()=>{
// fetch("http://localhost:8080/student/getAll")
// .then(res=>res.JSON())
// .then((result)=>{
//     setStudents(result);
// }
// )
// },[])
async function fetchData() {
    const response = await fetch('http://localhost:8080/student/getAll');
    const students = await response.json();
    setStudents(students);
  }
  fetchData();
}, []);
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <form>
      <TextField id="outlined-basic" label="student name" variant="outlined" fullWidth value={name} required onChange={(e)=>setName(e.target.value)}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="student address" variant="outlined" fullWidth value={address} required onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        SUBMIT
      </Button>
      </form>
      </Paper>
      <h1>Students</h1>
      <Paper elevation={7} style={paperStyle}>
        {students.map(student=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
                Id:{student.id}<br/>
                Name:{student.name}<br/>
                Address:{student.address}
            </Paper>
        ))
        }
      </Paper>
      </Container>
 
    </Box>
  );
}
