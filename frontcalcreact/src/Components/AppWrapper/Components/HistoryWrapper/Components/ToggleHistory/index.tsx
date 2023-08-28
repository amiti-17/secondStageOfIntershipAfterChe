import { Button } from "@chakra-ui/react";

export default function ToggleHistory({toggle: onToggle}: {toggle: () => void}) {


  return <Button 
    onClick={onToggle}
    >↓ History ↓</Button>
}