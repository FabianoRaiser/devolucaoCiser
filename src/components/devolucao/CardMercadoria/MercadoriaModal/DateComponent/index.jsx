import { Input, Label } from "components/ui/UI"

// eslint-disable-next-line react/prop-types
export const DateComponent = ({ label }) => {
  return (
    <>
       <Label>{label}</Label>
       <Input type="date" />
    </>
  )
}
