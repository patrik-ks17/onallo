import styled from 'styled-components'
import Shows from './Shows'
import {SwitchCategory} from './Functions';

function App() {
  return (
  <>
    <Header>
      <h1>Netflix</h1>
      <Navbar>
        {Categories.map((item,index) => (
          <NavEl className='link' key={index} onClick={() => SwitchCategory(item)}>{item}</NavEl>
        ))}
      </Navbar>
    </Header>
    <Main>
      <Shows/>
    </Main>
    <Footer>

    </Footer>
  </>
  );
}




export default App;

const Header = styled.div`
  min-height: 50px;
  background-color: rgb(100,0,0);
  color: white;
  font-size: 18px;
  padding: 15px;
`

const Footer = styled.div`
  height: 58px;
  background-color: rgb(100,0,0);
  color: white;
  font-size: 18px;
  padding: 15px;
`
const Navbar = styled.div`
width: 100%;
display: block;
text-align: center;
`

const NavEl = styled.p`
  display: inline-flex;
  margin: 0px;  
  margin-right: 30px;
  font-size: 23px;
  font-weight: bold;  
  color: lightgrey;
`

const Main = styled.main`
  padding: 15px;
  background-color: rgb(20,20,20);
  height: calc(100vh - 58px - 58px);
  overflow: auto;
`

const Categories =  ["Action", "Documentary", "Horror", "Sport"]