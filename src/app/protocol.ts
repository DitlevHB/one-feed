import Post from "../models/post"

export default async function (op, Data) {
  switch (op.type) {
    case "new-post": {
      // all incoming posts are verified before being stored
      const post = await Post(op.data)

      // if there's a problem with the data or operation, you MUST discard it
      if(!post) return await Data.discard(op, 'data failed validation')     

      // // verifyAuthor method compares the authors of two models and returns
      // // true if authors match - in this case, we compare todo found in the database
      // // versus the delete action object
      // if (!(await verifyAuthor({ model: todo, model2: op.action }))) {
      //   // if authors didn't match, someone was being malicious, and you want to discard data
      //   return Data.discard(op, "delTodo / author verification fail")
      // } else {
      //   // authors matched, so let's save the post in our database
      //   // if Post didn't throw, everything checked out, and we can save the data
      //   await Data.put({ key: post.id, value: post })
      // }

      // await Data.put({ key: `posts:${user_id}:${post.id}`, value: post })
      break
    }
    default:
      throw new Error("UNKNOWN OP")
  }
}