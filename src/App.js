import { IsMenuVisibleProvider } from './context/isMenuVisibleContext';
import TimerPanel from './components/TimerPanel';
import Menu from './components/Menu';

const App = () => (
  <IsMenuVisibleProvider>
    <TimerPanel></TimerPanel>
    <Menu></Menu>
  </IsMenuVisibleProvider>
);

export default App;
