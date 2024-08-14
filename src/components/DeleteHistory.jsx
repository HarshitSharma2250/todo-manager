import { Box, Button,
    Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useBreakpointValue,
  Heading,
  Flex,
 } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const DeleteHistory = () => {
    const {deleteData}=useSelector((state)=>state.TODO)
    const headingTag = useBreakpointValue({ base: "h3", md: "h2", lg: "h1" });
    const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });
  return (
    <>
    <Box >
        {
            deleteData.length>0 ?
        ( 
            <>
            <Link to='/'><Button  bgColor={'green'}
    _hover={{bgColor:'gray'}}> return to Dashboard</Button></Link>
            <TableContainer>
                <Table variant='simple'>
                  <TableCaption>max limit 10</TableCaption>
                  <Thead>
              <Tr fontWeight={600}>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Assign To</Th>
                <Th>Role</Th>
                <Th>Phone</Th>
                <Th>status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {deleteData &&
                deleteData.map((ele) => (
                  <Tr key={ele.id}>
                    <Td>{ele.id}</Td>
                    <Td>{ele.name}</Td>
                    <Td>{ele.email}</Td>
                    <Td>{ele.assignto}</Td>
                    <Td>{ele.role}</Td>
                    <Td>{ele.number}</Td>
                    <Td>{ele.status ? "complete" : "pending"}</Td>
                  </Tr>
                ))}
            </Tbody>
                  
                </Table>
              </TableContainer>
              </>
              ):
              (
                <>
                <Heading
                as={headingTag}
                size={headingSize}
                noOfLines={1}
                textAlign={"center"}
                mb={10}
              >
                History Is Empty
                </Heading>
                <Flex justifyContent="center">
  <Link to="/">
    <Button 
    textAlign="center"
     bgColor={'green'}
    _hover={{bgColor:'gray'}}>Return to Dashboard</Button>
  </Link>
</Flex>

                </>
              )
        }
    </Box>
    
    </>
  )
}
