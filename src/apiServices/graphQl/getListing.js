import { postRequest } from "../methods"

const query = `query MyQuery {
    check_in{
    id
    comment
    image_url
    created_at
    name
    updated_at
    }
    }`
export const getlistingQuery = async () => {
    const body = {
        query
    }
    const response = await postRequest({
        body
    })
    return response
}