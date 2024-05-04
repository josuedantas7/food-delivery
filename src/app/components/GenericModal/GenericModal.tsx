import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogCancelModified,
  } from "@/components/ui/alert-dialog"

import { IoMdAlert } from "react-icons/io";

import { TypesGenericModal } from './TypesGenericModal'

export const GenericModal = ({children, textButtonCancel, textButtonAction, defaultModal=false, title, description, typeModal} : TypesGenericModal) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
            <div className='absolute right-8 top-5'>
                <AlertDialogCancelModified>X</AlertDialogCancelModified>
            </div>
            {typeModal === 'alert' ? (
                <IoMdAlert className='mx-auto' size={35} color='#EEA200' />
            ): typeModal === 'error' ? (
                <IoMdAlert className='mx-auto' size={35} color='#ee0000' />
            ): null}
            <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>
                {description}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>{defaultModal ? 'Cancelar' : textButtonCancel}</AlertDialogCancel>
            <AlertDialogAction>{defaultModal ? 'Salvar' : textButtonAction}</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}