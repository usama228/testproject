import { postRequest } from "../methods"
const query = `mutation MyMutation($check_in: check_in_insert_input!) {
    insert_check_in_one(object: $check_in) {
      id
      name
    }
  }
`
export const onSubmit = async ({ name, image_url, comment }) => {
    const variables = {
        check_in: {
            name,
            image_url,
            comment
        }
    }
    const body = {
        query,
        variables
    }
    const response = await postRequest({
        body
    })
    return response
}