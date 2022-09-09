import DataModel, { OwnerOnly, AppendOnly } from "../../../sdk/lib/core/models"
import Post from "./post"

const simpleUser = {
    id: String,
    username: String
};

const User = DataModel({
    details: OwnerOnly({
      id: String,
      username: String,
      bio: String,
    }),
    posts: [OwnerOnly(Array(Post))],
    following: [OwnerOnly(Array(simpleUser))],
    followers: [AppendOnly(Array(simpleUser))],
}, { disable_owneronly: true }, {})

export default User;