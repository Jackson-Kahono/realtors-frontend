import { Box, Flex, FormControl, FormLabel, Input, Text, Link, Heading, Center } from "@chakra-ui/react";

import { useState } from "react";

export default function SignUp() {
      const [isAgent, setIsAgent] = useState(false);
      const handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                  fullname: e.target.name.value,
                  email: e.target.email.value,
                  password: e.target.password.value,
                  confirmp: e.target.confirm.value
            }
            if (data.password !== data.confirmp) {
                  alert("Password does not match")
                  e.target.confirm.value = ""
                  return
            } else {

                  let url = "http://localhost:3000/api/signup/client"
                  if (isAgent) {
                        url = "http://localhost:3000/api/signup/agency"
                  }
                  fetch(url, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                  })
                        .then(res => res.json())
                        .then(data => {
                              localStorage.setItem('token', data.id)
                              window.location.assign('/')
                        }
                        )
            }


      }
      return (
            <Flex h={"850px"} display={"flex"} justifyContent={"center"}>
                  <Center>
                        <Box w={"500px"} mt={"100px"} p={"5"} border={"1px solid #e2e8f0"} borderRadius={"md"}>
                              <form onSubmit={handleSubmit}>
                                    <FormControl>
                                          <Heading>Sign Up</Heading>
                                          <br /><br />
                                          <FormLabel>Full name</FormLabel>
                                          <Input type="text" name="name" />
                                          <br /><br />
                                          <FormLabel>Email</FormLabel>
                                          <Input type="email" name="email" />
                                          <br /><br />
                                          <FormLabel>Password</FormLabel>
                                          <Input type="password" name="password" />
                                          <br /><br />
                                          <FormLabel>Confirm password</FormLabel>
                                          <Input type="password" name="confirm" />
                                          <br /><br />
                                          <Input type="submit" onClick={
                                                () => {
                                                      setIsAgent(true)
                                                }
                                          } value="Signup as Agency" cursor={"pointer"} backgroundColor={"blue"} color={"white"} />
                                          <br /><br />
                                          <Input type="submit" onClick={
                                                () => {
                                                      setIsAgent(false)
                                                }
                                          } value="Signup as client" cursor={"pointer"} />
                                          <Text mt={4}>Dont have an account? <Link href="/login" color={"blue"}>Sign In</Link></Text>
                                    </FormControl>
                                    <br /><br />
                              </form>
                              <br /><br />
                        </Box>
                  </Center>
            </Flex>
      )
}

