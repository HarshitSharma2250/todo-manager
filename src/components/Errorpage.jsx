import React from 'react'

export const Errorpage = () => {
  return (
    <div>
      # Linked List

# Array
# Random access is O(1)

# Problem -
# Delete an element from any position - Expensive
# O(n) time
#
# The memory allocated is continous
# We know what/ where will be the next element

# LinkedList
# Each element of a LL, is know as node
# Each node will store some data
# and the address of the next node

# When you reach at any node, you will then
# know, where the next node is

# Deletion happens in O(1)

# If you have to access the 7th element of a LL
# How will you do it?

# Node is helping us to store not only the data
# but also the information about the next element


class Node:
  # Each node, will have a data
  # and the address of the next node
  def __init__(self, data):
    self.data = data  # data that you want to store
    self.next = None  # address of the next node


# What is head in a LL?
# Head is the starting node of the LL
head = Node(1)
secondNode = Node(8)
thirdNode = Node(3)
fourthNode = Node(6)

# head   secondNode   thirdNode   fourthNode

# This actually connects head --> secondNode
head.next = secondNode

# how to connect secondNode with thirdNode
head.next.next = thirdNode
secondNode.next = thirdNode
# Line 54 & 56 - No diff

thirdNode.next = fourthNode

# 1 --> 8 --> 3 --> 6 --> none

# We have constructed the LL
# How to print this LL?

# We will use a while loop
# We will start from the head

# itr = head
# print(itr.data)

# I will move my itr to the next element
# itr.next was my next element
# I just set my itr to the next element
# itr = itr.next
# print(itr.data)

# itr = itr.next
# print(itr.data)

# itr = itr.next
# print(itr.data)
# Instead of doing it manually
# I can use a loop

def printLL(head):
  itr = head
  while (itr != None):  # I will stop when my itr reaches none
    # Printing itr.data
    print(itr.data, end =" -> ")
    itr = itr.next
  print()

printLL(head)

# Important thing to keep in mind is
# once your head is gone, your LL is gone. 
# Each time, when we iterate in a LL
# We start from the head

# Add an element at the end of a LL
# 1 -> 8 -> 3 -> 6 -> None
# 1 -> 8 -> 3 -> 6 ->  7
# If we want to add a new element at the last of a LL
# 1. Go to the last element
# 2. Add the new element

def AddElementAtEnd(head, data):
  # Start from head
  itr = head
  # Iterate till the last element. 
  while (itr.next != None):
    itr = itr.next
  # itr ---> 6
  # Once I am a 6
  # I just need to add the new element as the next element
  itr.next = Node(data)

AddElementAtEnd(head, 7)
AddElementAtEnd(head, 7)
AddElementAtEnd(head, 7)
printLL(head)



# 1 -> 8 -> 3 -> 6 ->  7
# 999
nodeX = Node(999)

#        head
# 999 -> 1 -> 8 -> 3 -> 6 ->  7
nodeX.next = head

head = nodeX
printLL(head)



# HOw to delete the elements inside my LL
# Deleting the first element
head = head.next
printLL(head)
# head = head.next
# printLL(head)

def AddAtKthPosition(head, k, number):
  # We will first move k places ahead
  
  # 1 -> 8 -> 3 -> 6 -> 7 -> 7 -> 7 -> 
  itr = head
  while (k > 0):
    k = k - 1
    itr = itr.next
  print(itr.data)
  
  #     eightNode
  # 1 -> 8         -> 3         -> 6 -> 7 -> 7 -> 7 -> 
  #                   threeNode
  
  eightNode = itr
  tenNode = Node(number)
  threeNode = itr.next
  eightNode.next = tenNode
  tenNode.next = threeNode
  

AddAtKthPosition(head, 1, 10)
printLL(head)

def DeletionAtKthPosition(head, k):
  # We will first move k places ahead
  itr = head
  # 1 -> 8 -> 10 -> 3-> 6 -> 7 -> 7 -> 7 -> 
  while (k > 0):
    k = k - 1
    itr = itr.next
  # itr ---> 3
  # itr.next ---> 6
  # itr.next.next ---> 7

  # To delete 6, the next of itr, should be pointing to 7
  itr.next = itr.next.next

DeletionAtKthPosition(head, 3)
printLL(head)


# Basic terminologies
# Head of LL --> first element
# Tail of a LL --> last element

# Structure of a Node

# Types of LL
# 1. Singly LL
# 2. Doubly LL

# Insertion at End/ Start/ kTh place
# Deletion at start/ Kth place
# print LL

# we are able to visualise the LL
# and do the basic operation


# Practice! Practice! Practice! Practice! Practice! 
# Give at least 4 hours!!




    </div>
  )
}
