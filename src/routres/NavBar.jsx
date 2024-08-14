import { Heading, useBreakpointValue } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    
  const headingTag = useBreakpointValue({ base: "h3", md: "h2", lg: "h1" });
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });

  return (
<Link to='/'>
<Heading
    as={headingTag}
    size={headingSize}
    noOfLines={1}
    textAlign={"center"}
    mb={10}
  >
    DashBoard
    </Heading>
</Link>
  )
}
