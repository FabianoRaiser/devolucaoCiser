import { Input } from "components/ui/UI"
import { DateLabel } from "./styles"

// eslint-disable-next-line react/prop-types
export const DateComponent = ({ label }) => {
  return (
    <>
       <DateLabel>{label}</DateLabel>
       <Input type="date" />
    </>
  )
}
