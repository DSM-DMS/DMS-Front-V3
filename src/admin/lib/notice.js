import axios from 'axios'

const url = 'http://ec2.istruly.sexy:5001/notice'

export function noticePost (type, title, content) {
    console.log(type, title)
    axios
        .post(`${url}/${type}`, {
            title : title,
            content : content,
        },
        {
            headers : {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA2OTI5MjcsIm5iZiI6MTU1MDY5MjkyNywianRpIjoiNjEzZGM5MWUtYWQ0NS00NjYzLWFjNGMtZjZmNDZmZTE5N2ZjIiwiZXhwIjoxNTUwNjkzODI3LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.l9kFIecok1A-TAHtUY2dhoh4CuSth6YmuOOClLe6rZ4"
            }
        }
        )
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                console.log('성공')
            }
        })

        .catch(err => {
            console.log(err)
        })
}

export function noticeGet (type) {
    return axios
        .get(`${url}/${type}`, {
            headers : {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA2OTI5MjcsIm5iZiI6MTU1MDY5MjkyNywianRpIjoiNjEzZGM5MWUtYWQ0NS00NjYzLWFjNGMtZjZmNDZmZTE5N2ZjIiwiZXhwIjoxNTUwNjkzODI3LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.l9kFIecok1A-TAHtUY2dhoh4CuSth6YmuOOClLe6rZ4"
            }
        })
}

export function noticeDelete (type, id) {
    return axios
        .delete(`${url}/${type}/${id}`, 
        {
            headers : {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA2OTI5MjcsIm5iZiI6MTU1MDY5MjkyNywianRpIjoiNjEzZGM5MWUtYWQ0NS00NjYzLWFjNGMtZjZmNDZmZTE5N2ZjIiwiZXhwIjoxNTUwNjkzODI3LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.l9kFIecok1A-TAHtUY2dhoh4CuSth6YmuOOClLe6rZ4"
            }
        })
}

export function noticeContentGet (type, id) {
    return axios
    .get(`${url}/${type}/${id}`, {
        headers : {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTA2OTM0MzMsIm5iZiI6MTU1MDY5MzQzMywianRpIjoiMzZiMzI5MmItZTIzZS00YTMxLTliMWEtM2U5OGIyM2Q1MjMyIiwiZXhwIjoxNTUwNjk0MzMzLCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.hVmSaJeWre-Q4eICLvr5X7Z9rtrkr2O_TOJ63FFNsg4"
        }
    })
}