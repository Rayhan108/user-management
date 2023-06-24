
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import {

  RouterProvider,
} from "react-router-dom";
import router from './routes/router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='overflow-hidden'>
<QueryClientProvider client={queryClient}>

<Toaster />
 <RouterProvider router={router} />

   </QueryClientProvider>
</div>
)
