import { Flex,Text,Link, FormControl, FormLabel,Input, Box, Heading } from "@chakra-ui/react"

import { useState } from "react"


export default function Login(){
      const [isAgent, setIsAgent] = useState(false)
      const handleSubmit=(e)=>{
            e.preventDefault()
            const data = {
                  email: e.target.email.value,
                  password: e.target.password.value
            }
            let url = "http://localhost:9292/login/client"
            if(isAgent){
                  url = "http://localhost:9292/login/agencies"
            }
            fetch(url, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            })
            .then(res=>{
                  if(res.status == 200){
                        return res.json()
                  }
                  alert("Invalid Credentials")
                  return null

            })
            .then(data=>{
                  if(data){
                        if (isAgent) {
                              localStorage.setItem('agent', data.id)
                              alert()

                        }
                        localStorage.setItem("token", data.id)
                        window.location.href = "/"
                  }

            })

      }

      return (
            <Flex h={"850px"} display={"flex"} justifyContent={"center"}>
            <Box w={"500px"} mt={"100px"} p={"5"} border={"1px solid #e2e8f0"} borderRadius={"md"}>
                  <form onSubmit={handleSubmit}>
                        <FormControl>
                              <Heading>Login</Heading>
                              <br /><br />
                              <FormLabel>Email</FormLabel>
                              <Input type="email" name="email" />
                              <br/><br/>
                              <FormLabel>Password</FormLabel>
                              <Input type="password" name="password" />
                              <br/><br/>
                              <Input type="submit" onClick={()=>{
                                    setIsAgent(true)
                              }} value="Login as Agency" cursor={"pointer"} backgroundColor={"blue"}  color={"white"}/>
                              <br/><br/>
                              <Input type="submit" onClick={()=>{
                                    setIsAgent(false)
                              }} value="Login as client"cursor={"pointer"}  />
                              <Text mt={4}>Dont have an account? <Link href="/signup" color={"blue"}>Sign Up</Link></Text>
                        </FormControl>
                        <br/><br/>
                  </form>
                  <br/><br/>
            </Box>
            </Flex>
      )
}
