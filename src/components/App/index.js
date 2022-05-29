// == Import
import Header from 'src/components/Header';
import FlexContainer from 'src/components/FlexContainer';
import MainTitile from 'src/components/MainTitle';
import TopButton from 'src/components/TopButton';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <TopButton />
      <MainTitile />
      <FlexContainer />
    </div>
  );
}

// == Export
export default App;
