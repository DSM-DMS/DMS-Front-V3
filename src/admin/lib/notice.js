import axios from 'axios'
import { getCookie } from '../../lib/cookie'

const url = 'https://dms-admin.istruly.sexy/notice'

export function noticePost (type, title, content) {
    const token = getCookie('JWT');
    axios
        .post(`${url}/${type}`, {
            title : title,
            content : content,
        },
        {
            headers : {
                Authorization: `Bearer ${token}`
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
    const token = getCookie('JWT');
    return axios
        .get(`${url}/${type}`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
}

export function noticeDelete (type, id) {
    const token = getCookie('JWT');
    return axios
        .delete(`${url}/${type}/${id}`, 
        {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
}

export function noticeContentGet (type, id) {
    const token = getCookie('JWT');
    return axios
    .get(`${url}/${type}/${id}`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
}

export function noticePatch (type, id, title, content) {
    const token = getCookie('JWT');
    return axios
    .patch(`${url}/${type}/${id}`,  {
        title : title,
        content : content,
    },
    {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    )
}