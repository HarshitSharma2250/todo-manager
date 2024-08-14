import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  SimpleGrid,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "./AddTask";
import { DELETE, UPDATESTATUS, DELETEHISTORY } from "../redux/ActionType";
import { UpdatePage } from "./UpdatePage";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { data } = useSelector((state) => state.TODO);
  const dispatch = useDispatch();
  const [filterstatus, setfilter] = useState("All");
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const pagelimit = 5;

  const filterdata = data.filter(
    (ele) =>
      (filterstatus == "All" || filterstatus == ele.status) &&
      (ele.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        ele.assignto.toLowerCase().includes(search.toLocaleLowerCase()) ||
        ele.email.toLowerCase().includes(search.toLocaleLowerCase()))
  );

  const intialstate = (page - 1) * pagelimit;
  const finalpage = intialstate + pagelimit;
  const setpagedata = filterdata.slice(intialstate, finalpage);
  return (
    <>
      <Box>
        <SimpleGrid
          columns={["1fr", "1fr", "1fr"]}
          justifyContent={["center", "center", "space-between"]}
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ]}
          spacing={5}
        >
          <Flex
            alignItems={"center"}
            gap={["5px", "10px", "10px"]}
            justifyContent={"center"}
          >
            <Button
              bgColor={"blue"}
              color={"white"}
              onClick={() => setfilter(true)}
              fontSize={["10px", "medium", "medium"]}
            >
              {" "}
              complete
            </Button>
            <Button
              bgColor={"blue"}
              color={"white"}
              onClick={() => setfilter(false)}
              fontSize={["10px", "medium", "medium"]}
            >
              pending
            </Button>
            <Button
              bgColor={"blue"}
              color={"white"}
              onClick={() => setfilter("All")}
              fontSize={["10px", "medium", "medium"]}
            >
              clear filter
            </Button>
          </Flex>
          <Input
            w={["95%", "80%"]}
            m={"auto"}
            placeholder="search by name , assignto and email"
            type="text"
            onChange={(e) => setsearch(e.target.value)}
          />
          <Box m={"auto"}>
            <AddTask />
            <Link to="/history">
              <Button
                bgColor={"green"}
                _hover={{ bgColor: "gray" }}
                w={["48%", "fit-content"]}
                m={"auto"}
                ml={3}
              >
                delete history
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>

      <Box mt={12}>
        <TableContainer>
          <Table variant="simple" colorScheme="teal">
            <Thead>
              <Tr fontWeight={600}>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Assign To</Th>
                <Th>Role</Th>
                <Th>Phone</Th>
                <Th>status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {setpagedata &&
                setpagedata.map((ele) => (
                  <Tr key={ele.id}>
                    <Td>{ele.id}</Td>
                    <Td>{ele.name}</Td>
                    <Td>{ele.email}</Td>
                    <Td>{ele.assignto}</Td>
                    <Td>{ele.role}</Td>
                    <Td>{ele.number}</Td>
                    <Td>{ele.status ? "complete" : "pending"}</Td>
                    <Td>
                      <Button
                        onClick={() =>
                          dispatch({ type: UPDATESTATUS, payload: ele.id })
                        }
                        bgColor={ele.status ? "#e6ffee" : "#ff80b3"}
                        _hover={{ bgColor: ele.status ? "#e6ffee" : "#ff80b3" }}
                      >
                        {ele.status ? <FaToggleOn /> : <FaToggleOff />}
                      </Button>
                      <UpdatePage id={ele.id} />
                      <Button
                        onClick={() => {
                          dispatch({ type: DELETEHISTORY, payload: ele.id });
                          dispatch({ type: DELETE, payload: ele.id });
                        }}
                        bgColor={"red"}
                        _hover={{ bgColor: "red" }}
                      >
                        <MdDeleteOutline />
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Flex ml={10} mt={10}>
        <button
          onClick={() => setpage(page - 1)}
          disabled={page <= 1}
          style={{backgroundColor:'blueviolet',padding:'5px 15px', borderRadius:'3px'  }}
          
        >
          prev
        </button>
        <button onClick={() => setpage(page + 1)} 
        disabled={page >= Math.ceil(filterdata.length/pagelimit)}
        style={{backgroundColor:'blueviolet',padding:'5px 15px', borderRadius:'3px' , marginLeft:'20px'}}
          >
          next
        </button>
      </Flex>
    </>
  );
};
