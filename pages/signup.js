import { Box, Flex, FormControl, FormLabel, Input, Text, Link, Heading, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useState } from "react";

export default function SignUp() {
      const [isAgent, setIsAgent] = useState(false);
      const router = useRouter();
      const handleSubmit = (e) => {
            e.preventDefault();
            const data = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  password: e.target.password.value,
            }
            let confirmp = e.target.confirm.value
            if (data.password !== confirmp) {
                  alert("Password does not match")
                  e.target.confirm.value = ""
                  return
            } else {

                  let url = "http://localhost:9292/clients"
                  if (isAgent) {
                        url = "http://localhost:9292/agencies"
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
                              if (isAgent) {
                                    localStorage.setItem('agent', true)
                              }
                              localStorage.setItem('token', data.id)
                              router.push('/')
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

