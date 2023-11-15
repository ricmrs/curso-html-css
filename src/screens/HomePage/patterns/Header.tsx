import Box from "@/components/Box";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import NavBar from "@/components/NavBar";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";

export default function Header() {
  const theme = useTheme();

  const [showModal, setShowModal] = useState(false);

  return (
    <Box
      tag="header"
      styleSheet={{
        width: "100%",
        backgroundColor: theme.colors.primary.x600,
        borderBottom: "5px solid #000",
        justifyContent: "center",
        alignItems: "flex-end",
        height: { xs: "65px", md: "85px", xl: "95px" }
      }}
    >
        <Button
          onClick={() => setShowModal(true)}
          styleSheet={{
            alignSelf: "flex-end",
            marginRight: "14px",
            display: { xs: "flex", md: "none" }
          }}
        >
          <Icon 
            name="menu" 
            styleSheet={{ 
              color: theme.colors.accent.x050,
              height: "60px",
              width: "60px"
            }}
            viewBox={[60, 60]}
          />
        </Button>
        {showModal &&
        <Modal
          onClose={() => setShowModal(false)}
        >
          <NavBar onClick={() => setShowModal(false)}/>
        </Modal>}
        <NavBar 
          styleSheet={{ 
            flexDirection: "row", 
            display: { xs: "none", md: "flex", xl: "flex" }, 
            marginRight: { xs: "30px", md: "30px", xl: "65px" } 
          }}/>
    </Box>
  )
}
