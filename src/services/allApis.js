import {BASE_URL} from './base_url'
import {commonRequest} from './commonRequest'



export const addProducts = async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/products`,body)
}

export const getProduct =async()=>{
    return await commonRequest("GET",`${BASE_URL}/products`,'')
}


export const addCatagory = async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/catagory`,body)
}

export const getCatagory =async()=>{
    return await commonRequest("GET",`${BASE_URL}/catagory`,'')
}
export const getSpecificCatagory =async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/catagory/${id}`,'')
}
export const getSpecificProduct =async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/products/${id}`,'')
}

export const updateCatagory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/catagory/${id}`,body)
}

export const getCatagoryAllProduct =async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/catagory/${id}`,'')
}

export const deleteProduct=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/products/${id}`,'')
}
export const deleteCatagory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/catagory/${id}`,'')
}