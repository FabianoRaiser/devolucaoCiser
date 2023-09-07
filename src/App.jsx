import { GlobalStyle } from "GlobalStyle"
import { Cabecalho } from "components/Cabecalho"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Outlet />
    </>
  )
}

export default App
