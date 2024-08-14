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
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ADDTASK } from '../redux/ActionType'

export const AddTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch=useDispatch()

const name=useRef()
const email=useRef()
const assignto=useRef()
const status=useRef()
const number=useRef()
const role=useRef()

function HandleSubmit(e){
    e.preventDefault()
dispatch({type:ADDTASK,payload:{
    name:name.current.value,
    email:email.current.value,
    assignto:assignto.current.value,
    role:role.current.value,
    number:number.current.value,
    status:status.current.checked,
    id:Date.now()
}})
}

  return (
    <>
    <Button onClick={onOpen}
    bgColor={'green'}
    _hover={{bgColor:'gray'}}
    w={["45%",'fit-content']}
    m={'auto'}
    >Add+</Button>
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
      <form onSubmit={HandleSubmit}>
      <SimpleGrid 
 spacing={4}
 width={['90%']}
 m={'auto'}
 > 
      <Input type='text' ref={name} placeholder='name' required/>
      <Input type='email' ref={email} placeholder='email' required/>
      <Input type='text' ref={assignto} placeholder='assign To'/>
      <Input type='text' ref={role} placeholder='write your role'  required/>
      <Input type='number' ref={number} placeholder='975636.......' required/>
      <Checkbox ref={status}>status</Checkbox>
      <Button type='submit' borderRadius={15} bgColor={'black'} color={'white'} _hover={{bgColor:'gray'}} onClick={onClose}> Add Task</Button>
      </SimpleGrid>
      </form>
      </ModalBody>
    </ModalContent>
  </Modal>
  </>
  )
}


