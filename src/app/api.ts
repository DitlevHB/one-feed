// import { UUID } from "../../../sdk/lib/core/dist/node/utils"
import { UUID } from "../../../sdk/lib/core/utils"
import Post from "../models/post"

export default async function (Data, Protocol) {
  return {
    async backboneReactOnAdd(callback: Function) {
      return Data.onAdd(callback)
    },
    async backboneReactAll() {
        return Data.query({lt: "~"})
    },
    async allPosts() {
      const items = await Data.query({ });
      return items;
    },
    // async all() {
    //   const items = await Data.getAll({ model: Post });
    //   return items;
    // },
    async newPost(data) {
      // let's add a unique id and timestamp to the post
      data.id = await UUID()
      data.created_at = new Date()
      
      // now, we create a data model object out of it
      // before sending it out to the world
      const post = await Post(data)
      
      if(post) {
        // user needs to sign the data, or the protocol will reject it
        // if signing fails, return error
        if(!await post.sign()) return new Error('signing data failed')

        // send it to the protocol
        await Protocol({
          type: "new-post",
          data: post,
        })
      }
    },
  }
}