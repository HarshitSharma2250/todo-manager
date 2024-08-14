import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure, Checkbox,
   Input,
    SimpleGrid
  } from '@chakra-ui/react'
  import { FaEdit } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATETASK } from '../redux/ActionType'

export const UpdatePage = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[state,setstate]=useState({name:'',email:'',assignto:'',number:'',status:false})
  const dispatch=useDispatch()
const {data}=useSelector((state)=>state.TODO)
useEffect(() => {
  const getData = data.find((ele) => ele.id === id);
  if (getData) {
    setstate(getData);
  }
}, [data, id]);
function Handletext(e){
  const values=e.target.type==='checkbox'?e.target.checked:e.target.value
setstate({
  ...state,
  [e.target.name]:values
})
}


function HandleSubmit(e){
  e.preventDefault()
dispatch({type:UPDATETASK,payload:state})
}

  return (
    <>
    <Button onClick={onOpen}
    bgColor={'green'}
    _hover={{bgColor:'gray'}}
    ><FaEdit /></Button>
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <form onSubmit={HandleSubmit}>
      <SimpleGrid 
 spacing={4}
 width={'90%'}
 m={'auto'}
 > 
      <Input type='text' value={state.name} name='name' onChange={Handletext} placeholder='name'/>
      <Input type='email' value={state.email} name='email' onChange={Handletext}  placeholder='email'/>
      <Input type='text' value={state.assignto} name='assignto' onChange={Handletext}  placeholder='assign To'/>
      <Input type='number' value={state.number} name='number' onChange={Handletext}  placeholder='mobile number'/>
      <Checkbox value={state.name} name='status' onChange={Handletext} >status</Checkbox>
      <Button type='submit' borderRadius={15} bgColor={'black'} color={'white'} _hover={{bgColor:'gray'}} onClick={onClose}> Add Task</Button>
      </SimpleGrid>
      </form>
      </ModalBody>
    </ModalContent>
  </Modal>
  </>
  )
}



