import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBuses = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBuses(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBuses(pageNo+1,pageSize,search);
        } catch(err) {
            return {
                data:[],
                total:0
            }
        }
    }
    if (
    res &&
    res.data &&
    res.data.data &&
    res.data.data.data &&
    res.data.data.data.length > 0) {
    return res.data.data;
    } else {
        return {
            data:[],
            total:0
        }
    }
}


const addBuses = (data) => {
return api.post(`/buses`,data)
}
const updateBuses = (id,data) => {
return api.put(`/buses/${id}`,data)
}
const getAllBuses = (page,paginator) => {
return api.get(`/buses/?page=${page}&paginator=${paginator}`)
}
const getOneBuses = (id) => {
return api.get(`/buses/${id}`)
}
const searchBuses = (page,paginator,searchKey) => {
return api.get(`/buses/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBuses = (id) => {
return api.delete(`/buses/${id}`)
}
export {getBuses,addBuses,updateBuses,getAllBuses,getOneBuses,searchBuses,deleteBuses}


