import { Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

// import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from '../src/components';
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"
import Navbar from "./components/Navbar"

const App = () => (
  <Box sx={{ backgroundColor: 'black' }}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  </Box>

);

export default App;