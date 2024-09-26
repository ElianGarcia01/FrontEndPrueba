import './App.css'

function App() {

  let name = "Elian"
  console.log(name)

  let random = true

  let mirar = random?<Title></Title>:<Button></Button>

  return (
    <>
    <div className="bg-sky-800 text-xs font-bold">HOLA TAILWIND</div>
    <div className="bg-red-600 text-lg">HOLA TAILWIND</div>
      <Title></Title>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      {mirar}
    </>
  )
}

function Button() {
  return (
    <button>Button</button>
  )
}

function Title() {
  return (
    <p>TEXTO ALEATORIO</p>
  )
}

function Card() {
  return (
    <div>
      <a href="">
        <div>
          <span>SUBTITLE</span>
          <h4>TITLE</h4>
        </div>
        <div>
          <Button></Button>
          <Img></Img>
        </div>
      </a>
    </div>
  )
}

function Img() {
  return (
    <img src="https://t1.uc.ltmcdn.com/es/posts/7/7/1/maserati_54177_7_600.jpg" alt=""></img>
  )

}

export default App
