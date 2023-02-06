import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import UserList from './UserList';

const queryClient = new QueryClient();


function App() {


  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
