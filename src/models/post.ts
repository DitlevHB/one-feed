import DataModel, { Binary, Commons } from "../../../sdk/lib/core/models"

// First, create the model
const Post = DataModel({
    id: String,
    text: String,
    created_at: Commons.PastDate,
    attachments: [ // [] means optional
        Array({
            type: String,
            blob: Binary,
            caption: [String],
        }),
    ],
})

export default Post;