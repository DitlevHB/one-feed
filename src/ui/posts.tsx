import React from "react"
import { useState, useEffect } from "react"
import { useAPI, useBackbone, useId} from "@backbonedao/react-hooks";
import { bb, monitorDatabase } from "./helpers"

export default function Posts() {
  // const API = useAPI();
  const backbone = useBackbone();
  const { authenticate, id, isAuthenticated, signObject, registerApp } =
    useId();
  const [posts, setPosts] = useState([])
  const [text, setText] = useState("");

  
  async function refreshPosts() {
    const items = await backbone.app.allPosts()
    setPosts(items);
  }
  
  useEffect(() => {
    refreshPosts();
  }, [])


  async function newPost () {
    if ((backbone as any).id) { // logged in 
      const id = await (backbone as any).id.getId();
      const user = await backbone.app.getUser(id);

      if (user) {

      }
      else {
        // could not find user
        
      }

      // find user with this ID and show profile

      
      //backbone.app.newPost({ text, id });
    }
  }

  async function createUser () {

    if (isAuthenticated) {
      const ids = await (backbone as any).id.getId();
      const bbid = id;
      debugger;
    }
    else {
      debugger;
      // @ts-ignore 
      await authenticate();
      // createUser();
    }
    
    // on action that changes data:
    // authenticate
    // see if user exists
    // if not, then start user creation flow
    // if user exists, then proceed to commit the data change.

        
    // const user = await backbone.app.getUser(id);
    
    // if (user) {

    // }
    // else {
    //   // could not find user
      
    // }
  }


  return (
    <>
      <div onClick={createUser}>
        Create user
      </div>
      <div>
        Account:

      </div>
      <div onClick={newPost}>
        Add new post
        <input type="text" onChange={(e)=>{
          setText(e.target.value);
        }}/>
      </div>
      
      <div>
        Posts: {posts.map((post, i)=>{
          return <div key={i}>
            {(post as any).text}
          </div>;
        })}
      </div>
      <div>
        Users:
        <div>
          {/* {backbone.app.users.map(()=>{

          })} */}
        </div>
      </div>
    </>
  )
}
