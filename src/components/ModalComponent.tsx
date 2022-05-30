import { Box, Modal } from '@material-ui/core'
import React from 'react'
import { useTheme } from '@mui/material/styles';

interface ModalTypes {
    open: boolean,
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    children: JSX.Element,
    style: any,
    styleModal?: React.CSSProperties
}
export default function ModalComponent({open, setOpen, style, children, styleModal = {}}: ModalTypes) {
  const theme = useTheme();
  const innerStyles = {
    backgroundColor: theme.palette.main.background,
    borderRadius: '5px'
  }
  return (
    <Modal
    open={open}
    onClose={() => setOpen(!open)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={{...innerStyles,...style}}>{children}</Box>
    </Modal>
  )
}
