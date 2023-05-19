import { HStack, Image } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import logo from "../assets/logo.webp"
import SearchInput from "./SearchInput"

interface NavbarProps {
  onSearch: (searchText: string) => void
}

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
