import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBus_Schedules = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBus_Schedules(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBus_Schedules(pageNo+1,pageSize,search);
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


const addBus_Schedules = (data) => {
return api.post(`/bus_schedules`,data)
}
const updateBus_Schedules = (id,data) => {
return api.put(`/bus_schedules/${id}`,data)
}
const getAllBus_Schedules = (page,paginator) => {
return api.get(`/bus_schedules/?page=${page}&paginator=${paginator}`)
}
const getOneBus_Schedules = (id) => {
return api.get(`/bus_schedules/${id}`)
}
const searchBus_Schedules = (page,paginator,searchKey) => {
return api.get(`/bus_schedules/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBus_Schedules = (id) => {
return api.delete(`/bus_schedules/${id}`)
}
export {getBus_Schedules,addBus_Schedules,updateBus_Schedules,getAllBus_Schedules,getOneBus_Schedules,searchBus_Schedules,deleteBus_Schedules}


