import React from "react";
import {AppBar,Toolbar,Typography,Button,TextField} from "@mui/material";
import Grid from '@mui/material/Grid';
import Logo from "./assets/logo.PNG";
import Slideimage from "./assets/slideimage.PNG";
import thearaval from "./assets/thearaval.PNG";
import delivered from "./assets/delivered.PNG";
import quality from "./assets/quality.PNG";
import mainimage from "./assets/main.PNG";

function Website() {
  return (
    <div >
      <AppBar position="static" style={{backgroundColor:"white"}}>  
        <Toolbar>    
          <Typography variant="h6">
          <img alt="LOgo Imgae" src={Logo} /> 
          <span style={{color:"black",padding:"10px",fontSize:"50px",fontFamily: '"Montserrat", Open Sans'}}>PURI</span>
          </Typography>
        </Toolbar>
      </AppBar>
      <div >
        <main>
        <Grid container sm={{mt:5}}>
          <Grid item xs={12} sm={2} >
          <p  style={{color:"black",fontSize:"30px",borderLeft:"4px solid #ac9955",fontFamily: '"Montserrat", Open Sans',marginLeft:"20px",padding:"20px"}}>CRAFTING EXEPTIONAL LIFESTYLE ACROSS DELHI NCR</p>
          </Grid>
          <Grid item xs={12} sm={10}>
           <img alt="Slide Imgae" src={Slideimage} style={{width:"100%",height:"90%"}}/> 
          </Grid>
        </Grid>

        <Grid container>
        <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <div style={{padding:"10px"}}>
              <h4>THE ARAVELLIS</h4>
              <p >Sector 61 Gurugram <br></br>10 min from horizon centre <br></br>High end specification <br></br>Lucxury club house</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <div style={{color:"black",fontSize:"30px",borderLeft:"4px solid #ac9955",fontFamily: '"Montserrat", Open Sans',paddingTop:"20px",paddingLeft:"10px",marginBottom:"10px"}}>NEW LAUNCH</div>
           <img alt="Slide Imgae" src={thearaval} style={{width:"100%",height:"70%"}}/>

           <div style={{paddingTop:"10px",paddingBottom:"10px"}}>
           <Button variant="outlined">KNOW MORE</Button> 
           </div>
          </Grid>
        </Grid>


        <Grid container spacing={8}>
          <Grid item xs={12} sm={8}>
          <img alt="Slide Imgae" src={delivered} style={{width:"100%",height:"80%"}}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h3 style={{borderLeft:"4px solid #ac9955",paddingLeft:"10px",paddingTop:"20px",fontFamily: '"Montserrat", Open Sans'}}>DELIVERED</h3>
            <h4>DEPLOMATIC GREENS</h4>  
            <h5>LOCATION</h5>
             <p>Sector 110 A & 111 ,Gurgram</p>
             <h5>PROPERTY TYPE</h5>
             <p>Diplomatic Greens Apartments Residensial</p>
          </Grid>
        </Grid>
        <div style={{textAlign:"center"}}><Button variant="outlined">VIEW ALL PROJECTS</Button> </div>

        <Grid container>
        <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={3}>
            <h2 style={{fontFamily: '"Montserrat", Open Sans',fontWeight:"500"}}>DELIVARING QUALITY IN EACH ENDEAVOUR</h2>
             <p>Every project has a distinctive puri design launguage which has beecome synonymous with refined living in Delhi NCR.</p>
             <Button variant="outlined">DISCOVER MORE</Button>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
          <img alt="Slide Imgae" src={quality} style={{width:"100%",padding:"20px"}}/>
          </Grid>
        </Grid>

        <div><img alt="Slide Imgae" src={mainimage} style={{width:"100%",paddingTop:"40px",paddingBottom:"40px"}}/></div>
        <div style={{textAlign:"center",letterSpacing:"0.2em",fontSize:"20px",marginBottom:"40px"}}>REQUEST A CALL BACK</div>
          <form action="" style={{textAlign:"center",marginLeft:"25%",marginRight:"20%"}}>
            <Grid container>
              <Grid item xs={12} sm={3}>
              <TextField id="outlined-multiline-flexible" size="small" label="Name*" />
              </Grid>
              <Grid item xs={12} sm={4}>
              <TextField id="outlined-multiline-flexible" size="small" label="Mobile*" />
              </Grid>
              <Grid item xs={12} sm={3}>
              <TextField id="outlined-multiline-flexible" size="small" label="Email*" />
              </Grid>
            </Grid>
            <div style={{paddingTop:"30px",paddingBottom:"30px"}}><Button variant="outlined">SUBMIT</Button></div>
          </form>
        </main>
      </div>
      <div style={{borderTop:"1px solid rgb(191, 191, 191)",marginLeft:"5%",width:"90%"}}></div>
      <div style={{marginTop:"30px"}}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <img alt="LOgo Imgae" src={Logo} style={{width:"70px",marginLeft:"45%",marginTop:"10%"}}/> 
        </Grid>
        <Grid item xs={12} sm={5}>
         <h5>FOR GURUGAON</h5>
         <div style={{display:"flex"}}><span style={{marginRight:"60px"}}>Toll Free Number</span><span>1800 123 6244</span></div>
         <div style={{display:"flex"}}><span style={{marginRight:"147px"}}>Email</span><span>puri@Construction.com</span></div>
        </Grid>
        <Grid item xs={12} sm={4}>
         <h5>CORPARATE & RESITERED OFFICE</h5>
         <p>Puri Construction Private limited <br></br>4-7B, Ground Floor, Tolstay House, <br></br>15 & 17 Tolstay marg <br></br>New Delhi - 110 001</p>
         </Grid>
      </Grid>
      </div>
    </div>
  );
}
export default Website;
