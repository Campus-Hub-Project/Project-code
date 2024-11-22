'use client'

import { AlertDialog, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import React from 'react'
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../../ui/alert-dialog'

const AlertModal = ({ children }: { children: React.ReactNode }) =>
    <AlertDialog>{children}</AlertDialog>

const AlertModalTrigger = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

const AlertModalContent = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogContent>{children}</AlertDialogContent>

const AlertModalHeader = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogHeader>{children}</AlertDialogHeader>

const AlertModalTitle = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogTitle>{children}</AlertDialogTitle>

const AlertModalDescription = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogDescription>{children}</AlertDialogDescription>

const AlertModalFooter = ({ children }: { children: React.ReactNode }) =>
    <AlertDialogFooter>{children}</AlertDialogFooter>

export {
    AlertModal, AlertModalTrigger, AlertModalContent,
    AlertModalHeader, AlertModalTitle, AlertModalDescription,
    AlertModalFooter
}