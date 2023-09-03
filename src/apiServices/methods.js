import { instance } from "./instance"
export const postRequest = async ({
    target,
    body
}) => {
    try {
        const response = await instance().post(target, body).catch((e) => console.log(e)
        )
        return response
    } catch (error) {
        console.log(error)
    }
}