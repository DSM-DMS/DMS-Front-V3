import axios from 'axios'
import { getCookie } from '../../lib/cookie'
import axiosWrapper from './axiosWrapper'

const url = 'https://admin-api.dms.istruly.sexy/notice'

export function noticePost (type, title, content) {
    const jwt = getCookie('JWT');
    const ref = getCookie('RFT');
    return axiosWrapper
        .post(`${url}/${type}`, `Bearer ${jwt}`, `Bearer ${ref}`, {
            title : title,
            content : content,
        })
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
    const jwt = getCookie('JWT');
    const ref = getCookie('RFT');
    return axiosWrapper
        .get(`${url}/${type}`, `Bearer ${jwt}`, `Bearer ${ref}`)
}

export function noticeDelete (type, id) {
    const jwt = getCookie('JWT');
    const ref = getCookie('RFT');
    return axiosWrapper
        .delete(`${url}/${type}/${id}`,
                `Bearer ${jwt}`,
                `Bearer ${ref}`
         )
}

export function noticeContentGet (type, id) {
    const jwt = getCookie('JWT');
    const ref = getCookie('RFT');
    return axiosWrapper
    .get(`${url}/${type}/${id}`, 
            `Bearer ${jwt}`,
            `Bearer ${ref}`
    )
}

export function noticePatch (type, id, title, content) {
    const jwt = getCookie('JWT');
    const ref = getCookie('RFT');
    return axiosWrapper
    .patch(`${url}/${type}/${id}`,  `Bearer ${jwt}`, `Bearer ${ref}`, {
        title : title,
        content : content,
    },
    )
}