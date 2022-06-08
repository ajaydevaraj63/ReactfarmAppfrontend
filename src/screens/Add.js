import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
      var[title,setTitle]=useState("")
      var[about,setAbout]=useState("")
      var[image,setImage]=useState("")
      var[price,setPrice]=useState("")
     
      const add=()=>{
            var data={"title":title,"about":about,"price":price,"image":image}
            console.log(data)
            axios.post("http://localhost:4000/api/add",data).then((response)=>{
                  if(response.data.status="success"){
                        alert("succesfully added")

                  }
                  else{
                        alert("error")
                  }
            })
      }
  return (
    <div>
          <Nav/>
          <div class="container" 
    >
    <div class="row">
          <div class="col col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                      <div class="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label for="" class="form-label"><b>Name</b></label></div>
                      <input type="text"  class="form-control"onChange={(e)=>{setTitle(e.target.value)}}/>
                      <div class="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label"><b>Image</b></label></div>
                            <input type="file" value="" class="form-control"onChange={(e)=>{setImage(e.target.value)}}/>
                           
                      </div>
                      <div class="col  col-12 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8">
                        
                            <label for="" class="form-label"></label><b>About</b></div>
                            <textarea name="" id="" cols="30" rows="10" class="form-control "onChange={(e)=>{setAbout(e.target.value)}}></textarea>
                             
                    
                      </div>
                      <div class="col col-12 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8">
                            <label for="" class="form-label"></label><b>price</b>
                            <input type="text" class="form-control"onChange={(e)=>{setPrice(e.target.value)}}/>
                   
                           

                      </div>
                      <div class="col g-4 col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xxl-4" >
                          
                            <input type="button" value="Add your item" class="btn btn-success" onClick={add} />
                 
                      </div>
                      <div class="col g-4 col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
                          
                           <button type="reset" class="btn btn-danger">Clear</button>
                 
                      </div>
                </div>
          </div>
    </div>

  )
}

export default Add