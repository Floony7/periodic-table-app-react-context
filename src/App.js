import React from "react"
import { PeriodicProvider } from "./context/AppState"
import Page from "./components/Page"
import ElementList2 from "./components/ElementList2"
import Filter from "./components/Filter"

function App() {
  return (
    <PeriodicProvider>
      <Page>
        <Filter />
        <ElementList2 />
      </Page>
    </PeriodicProvider>
  )
}

export default App
