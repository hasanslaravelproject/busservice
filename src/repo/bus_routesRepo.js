import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBus_Routes = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBus_Routes(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBus_Routes(pageNo+1,pageSize,search);
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


const addBus_Routes = (data) => {
return api.post(`/bus_routes`,data)
}
const updateBus_Routes = (id,data) => {
return api.put(`/bus_routes/${id}`,data)
}
const getAllBus_Routes = (page,paginator) => {
return api.get(`/bus_routes/?page=${page}&paginator=${paginator}`)
}
const getOneBus_Routes = (id) => {
return api.get(`/bus_routes/${id}`)
}
const searchBus_Routes = (page,paginator,searchKey) => {
return api.get(`/bus_routes/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBus_Routes = (id) => {
return api.delete(`/bus_routes/${id}`)
}
export {getBus_Routes,addBus_Routes,updateBus_Routes,getAllBus_Routes,getOneBus_Routes,searchBus_Routes,deleteBus_Routes}


