import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { PostDetails } from "./pages/PostDetails";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header/>
        <div className="zona1">
          
          <Routes>
            <Route path="/" element={<Navigate to="/posts" />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
