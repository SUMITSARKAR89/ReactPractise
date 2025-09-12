import Card from "./component/Card"
import Destruction from "./component/Destruction"



function App() {
  

  return (
    <>
    <h1 className="headTitle">todo apps</h1>
    <Card titleText="Card One" titleDesc="This is card One description" titleLink ="see more" />
    <Card titleText="Card Two" titleDesc="This is card two description" titleLink ="view more"/>
    <Card titleText="Card Three" titleDesc="This is card three description" titleLink ="show more" />

    <Destruction titleText = "Destruction one" titleDesc = "This is card One destruction. thank you" titleLink = "Enroll now...." />
      
    </>
  )
}

export default App
