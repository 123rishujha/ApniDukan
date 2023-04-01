import { Modal,ModalHeader, ModalOverlay, ModalContent, ModalBody, VStack, Divider,Text, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
function CustomText(props) {
  return (
    <Text paddingLeft={'20px'} fontFamily="body" fontSize="md"  color='gray.900' _hover={{ bg: "gray.200" }} lineHeight="tall" {...props}>
      {props.children}
    </Text>
  );
}
export default function SideMenuModal({ onClose }) {


  return (
    <Modal isOpen onClose={onClose} size="xl"   >
      <ModalOverlay />
      <ModalContent position="absolute" top="0" left="0" bg='#fff' bottom="0" overflowY="auto" width="60%"  pr="4" marginBottom={'0px'} marginTop={'0px'}>
      <ModalHeader bg='gray.900' color='#fff' w='100%' marginRight={'0px'}>Modal Title</ModalHeader>
        <ModalBody>
          <VStack align="stretch" spacing="4">
            <CustomText fontWeight="bold">Trending</CustomText>
            <CustomText>Best Sellers</CustomText>
            <CustomText>New Releases</CustomText>
            <CustomText>Movers and Shakers</CustomText>
            <Divider  borderColor={'gray.500'}/>
            <CustomText fontWeight="bold">Categories</CustomText>
            <CustomText>Men</CustomText>
            <CustomText>Women</CustomText>
            <CustomText>Electronics</CustomText>
            <Divider borderColor={'gray.500'} />
            <CustomText fontWeight="bold">Top Categories </CustomText>
            <CustomText>Home & Kitchen</CustomText>
            <CustomText>Beauty</CustomText>
            <CustomText> Household Supplies</CustomText>
            
           
          </VStack>
        </ModalBody>
        
      </ModalContent>
      
      <IconButton
          icon={<CloseIcon />}
          aria-label="Close"
          position="absolute"
          top="0"
          right="0"
          onClick={onClose}
          m="2"
        bg='gray.100'
        color='whiteAlpha'
        />
        
    </Modal>
  );
}
